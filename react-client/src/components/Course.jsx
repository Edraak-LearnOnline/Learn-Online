import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse, Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom'
const styles = {
    card: {
        maxWidth: 345,
        width: 300,
        margin: "20px"
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        cursor: "pointer"
    },
};

class Course extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            liked: false,
            courseName: '',
            description: '',
            video: "",
            publishTime: '',
            likeNom: 0
        }
    }

    updateCourse(id) {
        var that = this;
        var obj = {
            courseName: this.state.courseName,
            description: this.state.description,
            video: this.state.video,
            id: id
        }
        $.ajax({
            url: '/courseController/update',
            type: 'PUT',
            data: obj,
            success: function (data) {
                console.log(data)
                alert(`You updated ${data.courseName} successfully`)
                window.location.reload("/profile")
            },
            error: function (err) {
                console.log(err)
            }
        })
    }


    onClick() {
        this.setState({
            open: !this.state.open
        })
    }
    like() {
        const that = this
        const { liked } = this.state;
        liked ? $.ajax({
            url: "/courseController/Unlike",
            type: "POST",
            data: {
                publisher: that.props.pub
            },
            success: (res) => {
                console.log(res);
                that.setState({
                    liked: false,
                    likeNom:res.Like
                })
            }

        }) : $.ajax({
            url: "/courseController/Like",
            type: "POST",
            data: {
                publisher: that.props.pub
            },
            success: (res) => {
                console.log(res);
                that.setState({
                    liked: true,
                    likeNom:res.Like
                })
            },
            error: (err) => {
                alert("yoo need to login first")
            }

        })


    }
    render() {
        const { classes } = this.props;
        const { liked } = this.state;
        return (
            <Card className={classes.card}>
                <CardMedia
                    onClick={() => window.open(this.props.video)}
                    className={classes.media}
                    image={this.props.img ? this.props.img : "https://www.google.com/imgres?imgurl=http%3A%2F%2Fskyedazzle.com%2Fwp-content%2Fthemes%2Fpanama%2Fassets%2Fimg%2Fempty%2F600x600.png&imgrefurl=http%3A%2F%2Fskyedazzle.com%2Fwp-content%2Fthemes%2Fpanama%2Fassets%2Fimg%2Fempty%2F&docid=nipbAev26zrE5M&tbnid=WfWdc9bk7eb-hM%3A&vet=10ahUKEwjuh-fe3s7cAhVKyoMKHUsZDKwQMwg7KAgwCA..i&w=600&h=600&bih=961&biw=1920&q=empty%20image&ved=0ahUKEwjuh-fe3s7cAhVKyoMKHUsZDKwQMwg7KAgwCA&iact=mrc&uact=8"}
                    title="View Video"
                />
                <CardContent>
                    <Grid container justify="space-between" direction="row">
                        <Grid item>
                            <Typography gutterBottom variant="headline" component="h2">
                                {this.props.title}
                            </Typography>
                        </Grid>
                        <Grid>
                            <i className="material-icons"
                                style={{
                                    color: liked ? "#0066ff" : null,
                                    cursor: "pointer"
                                }}
                                onClick={this.like.bind(this)}>
                                thumb_up
                            </i>
                            <p>{this.state.likeNom}</p>
                        </Grid>
                    </Grid>
                    <Typography component="p" style={{ fontFamily: "verdana", fontSize: "12px", width: "100%" }}>
                        {this.props.dis}
                    </Typography>
                    <Typography component="p" style={{ fontFamily: "verdana", fontSize: "12px", width: "100%" }}>
                        <a  href={this.props.video}>
                            view the vedio
                        </a>
                    </Typography>
                    <Typography component="p" style={{ fontFamily: "verdana", fontSize: "12px", width: "100%" }}>
                        {this.props.date}
                    </Typography>
                </CardContent>
                {
                    this.props.admin ?
                        <CardActions>
                            <Button size="small" color="primary" onClick={this.onClick.bind(this)}>
                                Update
                            </Button>
                            <Button size="small" color="primary" onClick={this.props.delete}>
                                Delete
                            </Button>
                        </CardActions> : null
                }
                {
                    this.props.admin ? <Collapse in={this.state.open} style={{ padding: "20px", textAlign: "center" }}>
                        <TextField style={{ width: "100%", textAlign: "center" }}
                            onChange={(e) => this.setState(
                                { courseName: e.target.value }
                            )}
                            required
                            label="NAME"
                            placeholder="NAME" />
                        <TextField style={{ width: "100%", textAlign: "center" }}
                            onChange={(e) => this.setState({
                                description: e.target.value
                            })}
                            required
                            label="DESCRIPTION"
                            placeholder="DESCRIPTION" />
                        <TextField style={{ width: "100%", textAlign: "center" }}
                            required
                            label="VEDIO"
                            onChange={(e) => this.setState({
                                video: e.target.value
                            })}
                            placeholder="VEDIO" />
                        <Button variant="contained" color="primary" style={{ margin: "20px" }}
                            onClick={() => this.updateCourse(this.props.cId)}>
                            UPDATE
                        </Button>
                    </Collapse> : null
                }

            </Card>
        );
    }

}

Course.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Course);