import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '~/assets/images/logo.png'; // Đảm bảo đường dẫn chính xác

function Header() {
    return (
        <header className={styles.header}>
            {/* Top Navigation (ẩn trên màn nhỏ) */}
            <div className={`${styles.top_nav} py-2 bg-light border-bottom d-none d-lg-block`}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className="text-muted small">Free shipping on all U.S orders over $50</div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex justify-content-end gap-3">
                                <NavDropdown title="USD" id="currency-dropdown">
                                    <NavDropdown.Item href="#">VND</NavDropdown.Item>
                                    <NavDropdown.Item href="#">AUD</NavDropdown.Item>
                                    <NavDropdown.Item href="#">EUR</NavDropdown.Item>
                                    <NavDropdown.Item href="#">GBP</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="English" id="language-dropdown">
                                    <NavDropdown.Item href="#">French</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Italian</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Vietnamese</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="My Account" id="account-dropdown">
                                    <NavDropdown.Item as={Link} to="/sign-in">
                                        Sign In
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/register">
                                        Register
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Main Navigation */}
            <div className="bg-white py-3 shadow-sm">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={3} xs={6} className="d-flex align-items-center">
                            <div className={styles.logo_container}>
                                <img src={logo} alt="Logo" />
                                <span>Tò He - Nét Văn Hóa Việt</span>
                            </div>
                        </Col>
                        <Col lg={6} xs={12}>
                            <Navbar expand="lg">
                                <Navbar.Toggle aria-controls="main-navbar" />
                                <Navbar.Collapse id="main-navbar">
                                    <Nav className="mx-auto gap-4 fw-semibold text-uppercase">
                                        <Nav.Link as={Link} to="/">
                                            Trang Chủ
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/contact">
                                            Liên Hệ
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/checkprice">
                                            Báo Giá
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/introduce">
                                            Giới Thiệu
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                        <Col lg={3} xs={6} className="d-flex justify-content-end align-items-center">
                            <div className="d-flex gap-3">
                                <button className="btn btn-light p-2">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                <button className="btn btn-light p-2">
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                                <div className="position-relative">
                                    <button className="btn btn-light p-2">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </button>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        2
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
}

export default Header;
