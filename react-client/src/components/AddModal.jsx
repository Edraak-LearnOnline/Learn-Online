import React, { Component } from 'react'
import { Modal, Button, Grid, TextField, AppBar, Toolbar, Typography, Avatar, Menu, MenuItem, } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import $ from 'jquery';
import axios from 'axios';


const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    flex: {
        flexGrow: 1
    },
    bigAvatar: {
        width: "40",
        height: "40",
        marginLeft: "5px"
    },
    big: {
        width: "40",
        height: "40",
        marginLeft: "5px"
    }

});
class AddModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            courseName: "",
            description: "",
            video: "",
            image: "",
            anchorEl: null,
        }
        this.AddCourse = this.AddCourse.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this)

    }

    uploadPhoto(photo) { // post the profile image and get it at the same time
        var that = this
        let file = photo.target.files[0];
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {

            that.setState({ image: e.target.result })
        };
    }
    AddCourse() {
        var that = this;
        var obj = {
            courseName: that.state.courseName,
            description: that.state.description,
            video: that.state.video,
            image: that.state.image
        }
        axios.post('/courseController/Create', obj)
            .then(() => {
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);

            })
    }

    handleClick(event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose() {
        this.setState({ anchorEl: null });
    };



    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;


        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='title' color='inherit' className={classes.flex}>
                            <a href="/home">Learn-Online</a>
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => this.setState({
                                open: true
                            })}>
                            ADD COURSE
                        </Button>
                        <Avatar
                            alt="Adelle Charles"
                            src={"https://static1.squarespace.com/static/5a16b19b268b96d901c31aab/5a188f31ec212d9bd3b8b5ff/5b0e16aeaa4a99acd2525e96/1527650073172/Empty+profile.jpg?format=1000w"}
                            className={classes.bigAvatar}
                            onClick={this.handleClick}

                        >
                        </Avatar>
                        <Menu
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}>
                            <MenuItem onClick={this.handleClose} ><a href="/adminController/logout">LogOut</a></MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Modal open={this.state.open}
                    onClose={() => this.setState({
                        open: false
                    })}>
                    <Grid className={classes.paper} style={{
                        top: `50%`,
                        left: `50%`,
                        transform: `translate(-50%, -50%)`,
                    }}>
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
                            label="VEDIO LINK HERE"
                            onChange={(e) => this.setState({
                                video: e.target.value
                            })}
                            placeholder="VEDIO LINK HERE" />
                        <form>
                            <div className='container'>
                                <div className='profile'>
                                    <div className='container'>
                                        <div className='middle '>
                                            <div className='text '>
                                                <label className='btn' style={{ color: 'black' }}>
                                                    <input type='file' name='image' id='photo' style={{ display: 'none' }} onChange={this.uploadPhoto} /> ADD IMAGE
                                        </label>
                                            </div>
                                        </div>
                                    </div>
                                    <label style={{ color: 'black' }}>
                                        <div className='text-block' />
                                    </label>
                                </div>
                            </div>
                        </form>
                        <Button variant="contained"
                            onClick={this.AddCourse}
                            color="primary">
                            ADD COURSE
                            </Button>
                    </Grid>
                </Modal>
            </div>
        );
    };
};
AddModal.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AddModal);
