import { Fragment, useContext, useEffect, useState } from 'react';
import '../assets/css/auth.css';
import { Button, Card, Carousel, Col, Container, FloatingLabel, Form, Image, InputGroup, Modal, Row, Spinner, Stack } from "react-bootstrap";
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Auth({appTheme}) {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [isRotated, setIsRotated] = useState(false);
    const [userId, setUserId] = useState('');
    const [loginPass, setLoginPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [signupPass, setSignupPass] = useState('');
    const [signupConfirmPass, setSignupConfirmPass] = useState('');
    const [isPassMatch, setIsPassMatch] = useState();
    const [oneTimePass, setOneTimePass] = useState('');
    const [confirmOtp, setConfirmOtp] = useState('');
    const [isOtpConfirmed, setIsOtpConfirmed] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSendingOtp, setIsSendingOtp] = useState(false);

    function rotateCard() {
        setIsRotated(!isRotated);

        setUserId("");
        setLoginPass("");
        setFirstName("");
        setMiddleName("");
        setLastName("");
        setSignupEmail("");
        setMobileNumber("");
        setSignupPass("");
        setSignupConfirmPass("");
    };

    function login(e) {
        e.preventDefault();

        const loadingSwal = Swal.fire({
            title: 'Logging in...',
            showConfirmButton: false,
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userId,
                password: loginPass
            }),
            credentials: 'include'
        })
        .then(res => res.json())
        .then(result => {
            loadingSwal.close();

            if (!result.success) {
                Swal.fire({
                    title: result.message,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: false
                });

                if (result.errorType.toLowerCase() === 'login') {
                    document.getElementById('userId').classList.add('error');
                    document.getElementById('login-password').classList.add('error');
                }
                else if (result.errorType.toLowerCase() === 'account') {
                    document.getElementById('userId').classList.add('error');
                }
                
                else if (result.errorType.toLowerCase() === 'password') {
                    document.getElementById('login-password').classList.add('error');
                }
                else {
                    document.getElementById('userId').classList.remove('error');
                    document.getElementById('login-password').classList.remove('error');
                }

                setLoginPass('');
            }
            else {
                document.getElementById('userId').classList.remove('error');
                document.getElementById('login-password').classList.remove('error');
                setUserId('');
                setLoginPass('');

                getUserDetails(result.token);

                Swal.fire({
                    title: result.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: false
                })
                .then(result => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        navigate('/');
                    }
                })
            }
        })
        .catch(error => {
            loadingSwal.close();

            Swal.fire({
                title: 'Error logging in!',
                icon: 'error',
                text: error.message,
                timer: 3000,
                timerProgressBar: false,
                showConfirmButton: false
            });
        });
    };

    function getUserDetails(token) {
        fetch(`${process.env.REACT_APP_API_URL}/user/details`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(result => {
            setUser({
                id: result._id
            });

            sessionStorage.setItem('token', token);
            localStorage.setItem('token', token);
            Cookies.set('authToken', token, { secure: true });
        });
    };

    function generateOTP() {
        setIsSendingOtp(true);
        fetch(`${process.env.REACT_APP_API_URL}/otp/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userMail: signupEmail
            })
        })
        .then(res => res.json())
        .then(result => {
            setIsSendingOtp(false);
            setOneTimePass(result.otp);
        })
        .catch(error => {
            setIsSendingOtp(false);
            Swal.fire({
                title: error.message,
                icon: 'error',
                text: 'Failed to generate OTP',
                timer: 3000,
                timerProgressBar: false,
                showConfirmButton: false
            });
        });
    };

    function verifyOTP() {
        if (confirmOtp === oneTimePass) {
            setIsOtpConfirmed(true);
            register();
        }
        else {
            setIsOtpConfirmed(false);
        }
    };

    function checkAccountExist(e) {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/user/check-exists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signupEmail,
                mobileNumber: mobileNumber
            })
        })
        .then(res => res.json())
        .then(result => {
            if (!result.success) {
                setIsModalVisible(true);
            }
            else {
                Swal.fire({
                    title: 'Account Exist!',
                    icon: 'error',
                    text: result.message,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: false
                });
                setSignupPass("");
                setSignupConfirmPass("");
            }
        })
        .catch(error => {
            Swal.fire({
                title: error.message,
                icon: 'error',
                text: 'Could not verify if account exist',
                timer: 3000,
                timerProgressBar: false,
                showConfirmButton: false
            });
        });
    };

    function register() {
        const loadingSwal = Swal.fire({
            title: 'Signing up...',
            showConfirmButton: false,
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        fetch(`${process.env.REACT_APP_API_URL}/user/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                email: signupEmail,
                mobileNumber: mobileNumber,
                password: signupPass
            })
        })
        .then(res => res.json())
        .then(result => {
            loadingSwal.close();

            if (result.success === false) {
                Swal.fire({
                    title: result.message,
                    icon: 'error',
                    text: 'Please try again.',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: false
                });
            }
            else {
                setIsModalVisible(false);
                Swal.fire({
                    title: result.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: false
                });
                setFirstName("");
                setMiddleName("");
                setLastName("");
                setSignupEmail("");
                setMobileNumber("");
                setSignupPass("");
                setSignupConfirmPass("");
                setOneTimePass("");
            }
        })
        .catch(error => {
            loadingSwal.close();
            
            Swal.fire({
                title: error.message,
                icon: 'error',
                text: 'Failed to register account',
                timer: 3000,
                timerProgressBar: false,
                showConfirmButton: false
            });
        });
    };

    useEffect(() => {
        if (signupConfirmPass !== '') {
            if (signupConfirmPass !== signupPass) {
                setIsPassMatch(false);
            }
            else {
                setIsPassMatch(true);
            }
        }
        else {
            setIsPassMatch('undefined');
        }
    }, [signupConfirmPass, signupPass]);
    
    return (
        <Fragment>
            <Container fluid id="page-auth" className="page page-auth">
                <Row className="page-container justify-content-center align-items-center h-100 m-0">
                    <Col lg={{ span: 5, order: 1 }} className="ads-wrapper justify-content-center align-items-center h-100 p-3">
                        <Carousel fade controls={false} indicators={false}  className="ads">
                            <Carousel.Item>
                                <Image alt="ads-image-1" src="https://res.cloudinary.com/dbpgyvd0f/image/upload/v1704031988/maThECH/Ads_01_anm8td.jpg" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image alt="ads-image-2" src="https://res.cloudinary.com/dbpgyvd0f/image/upload/v1704032000/maThECH/Ads_02_m3sosd.jpg" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image alt="ads-image-3" src="https://res.cloudinary.com/dbpgyvd0f/image/upload/v1704032031/maThECH/Ads_03_wxwhpi.jpg" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image alt="ads-image-4" src="https://res.cloudinary.com/dbpgyvd0f/image/upload/v1704032055/maThECH/Ads_04_yezotx.jpg" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col lg={{ span: 5, order: 2 }} className="form-wrapper justify-content-center alignt-items center h-100 p-3">
                        <div className={`card-container h-100 w-100 my-auto d-flex align-items-center ${isRotated ? 'rotate' : ''}`}>
                            <Card className="w-100">
                                <div className="login-form d-flex flex-column">
                                    <Card.Header className="title-1 text-center fs-4">Login</Card.Header>
                                    
                                    <Card.Body>
                                        <Form onSubmit={login}>
                                            <FloatingLabel controlId="userId" label="Email/Mobile Number" className="mb-2">
                                                <Form.Control type="text" placeholder="Email/Mobile Number" value={userId} onChange={e => setUserId(e.target.value)} />
                                            </FloatingLabel>

                                            <FloatingLabel controlId="login-password" label="Password">
                                                <Form.Control type="password" placeholder="Password" value={loginPass} onChange={e => setLoginPass(e.target.value)} />
                                            </FloatingLabel>

                                            <div className="mt-4 d-flex justify-content-center w-100">
                                                <Button type="submit" variant="primary" className="w-75">Log in</Button>
                                            </div>
                                        </Form>
                                    </Card.Body>

                                    <Card.Footer className="text-center">
                                        Don't have an account? <Button variant="secondary" onClick={rotateCard}>Sign Up</Button>
                                    </Card.Footer>
                                </div>

                                <div className="signup-form d-flex flex-column">
                                    <Card.Header className="title-1 text-center fs-3">Sign Up</Card.Header>
                                    
                                    <Card.Body>
                                        <Form onSubmit={checkAccountExist}>
                                            <InputGroup className="mb-2">
                                                <FloatingLabel controlId="firstName" label="First Name">
                                                    <Form.Control type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                                </FloatingLabel>

                                                <FloatingLabel controlId="middleName" label="Middle Name">
                                                    <Form.Control type="text" placeholder="Middle Name" value={middleName} onChange={e => setMiddleName(e.target.value)} />
                                                </FloatingLabel>
                                            </InputGroup>

                                            <FloatingLabel controlId="lastName" label="Last Name" className="mb-2">
                                                <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                                            </FloatingLabel>

                                            <InputGroup className="mb-2">
                                                <FloatingLabel controlId="email" label="Email">
                                                    <Form.Control type="email" placeholder="Email" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} />
                                                </FloatingLabel>

                                                <FloatingLabel controlId="mobileNumber" label="Mobile Number">
                                                    <Form.Control type="text" placeholder="Mobile Number" value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} />
                                                </FloatingLabel>
                                            </InputGroup>

                                            <FloatingLabel controlId="password" label="Password" className="mb-2">
                                                <Form.Control type="password" placeholder="Password" value={signupPass} onChange={e => setSignupPass(e.target.value)} className={`form-pwd ${isPassMatch === true ? 'match' : ''}`} />
                                            </FloatingLabel>

                                            <FloatingLabel controlId="passConfirm" label="Confirm Password">
                                                <Form.Control type="password" placeholder="Confirm Password" value={signupConfirmPass} onChange={e => setSignupConfirmPass(e.target.value)} className={`form-pwd ${isPassMatch === true ? 'match' : isPassMatch === false ? 'error' : ''}`} />
                                            </FloatingLabel>

                                            <div className="mt-4 d-flex justify-content-center w-100">
                                                <Button type="submit" variant="primary" className="w-75">Register</Button>
                                            </div>  
                                        </Form>
                                    </Card.Body>

                                    <Card.Footer className="text-center">
                                        <Button variant="secondary" onClick={rotateCard}>I have an account</Button>
                                    </Card.Footer>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <Modal show={isModalVisible} onHide={() => setIsModalVisible(false)} centered className="modal-otp">
                <Modal.Header>
                    <Modal.Title className="title-1">Verify Email</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Stack direction="horizontal" gap={2}>
                        {oneTimePass !== ''
                        ?
                            (isOtpConfirmed === 'undefined'
                                ? <Form.Control type="text" value={confirmOtp} onChange={e => setConfirmOtp(e.target.value)}  />
                                :
                                (isOtpConfirmed === false
                                    ? <Form.Control type="text" value={confirmOtp} onChange={e => setConfirmOtp(e.target.value)} className="error" />
                                    : <Form.Control type="text" value={confirmOtp} onChange={e => setConfirmOtp(e.target.value)}  />
                                )
                            )
                        : <Form.Control type="text" disabled />
                        }
                        

                        {oneTimePass === ''
                        ? <Button type="button" variant="primary" onClick={generateOTP} className="w-50">Send OTP {isSendingOtp ? (<Spinner animation="border" variant={appTheme} size="sm" />) : ''}</Button>
                        : <Button type="button" variant="primary" onClick={verifyOTP} className="w-50">Verify OTP</Button>
                        }
                    </Stack>
                    {oneTimePass !== ''
                    ?
                    (isOtpConfirmed === 'undefined'
                        ? <p className="text-success text-italic">Please check your email for the one-time-password</p>
                        :
                        (isOtpConfirmed === false
                            ? <p className="text-danger text-italic">Error! You entered the wrong code!</p>
                            : <p className="text-success text-italic">Please check your email for the one-time-password</p>
                        )
                    )
                    : <></>
                    }
                </Modal.Body>
            </Modal>
        </Fragment>
    );
};