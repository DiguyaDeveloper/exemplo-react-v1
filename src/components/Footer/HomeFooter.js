
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
    render() {
        return (
            <>
                <div class="footer">
                    <div class="svg-curva">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#66c4de" fill-opacity="1" d="M0,192L20,165.3C40,139,80,85,120,69.3C160,53,200,75,240,122.7C280,171,320,245,360,277.3C400,309,440,299,480,277.3C520,256,560,224,600,186.7C640,149,680,107,720,80C760,53,800,43,840,74.7C880,107,920,181,960,224C1000,267,1040,277,1080,256C1120,235,1160,181,1200,176C1240,171,1280,213,1320,229.3C1360,245,1400,235,1420,229.3L1440,224L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
                        </svg>
                    </div>
                    <div class="content">
                        <div class="socials">
                            <div class="info">
                                <span>Acompanhe a <span>Shawime</span> nas redes sociais</span>
                            </div>
                            <div class="icons">
                                <div class="item">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon" nd-pin-path-child="html_body_section_div_ul_li1_a_svg">
                                        <path d="M45.35 0H2.65A2.65 2.65 0 000 2.65v42.7A2.65 2.65 0 002.65 48h23V29.41h-6.27v-7.24h6.26v-5.34c0-6.2 3.79-9.58 9.32-9.58a51 51 0 015.59.28V14h-3.84c-3 0-3.59 1.43-3.59 3.53v4.62h7.17l-.93 7.24h-6.24V48h12.23A2.65 2.65 0 0048 45.35V2.65A2.65 2.65 0 0045.35 0" nd-pin-path-child="html_body_section_div_ul_li1_a_svg_path"></path>
                                    </svg>
                                </div>
                                <div class="item">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 39.01" class="icon" nd-pin-path-child="html_body_section_div_ul_li2_a_svg">
                                        <path d="M48 4.61a19.69 19.69 0 01-5.66 1.55A9.88 9.88 0 0046.67.71a19.72 19.72 0 01-6.25 2.39 9.86 9.86 0 00-16.78 9A28 28 0 013.34 1.8a9.86 9.86 0 003 13.15 9.81 9.81 0 01-4.46-1.23v.12a9.85 9.85 0 007.95 9.66 9.87 9.87 0 01-4.45.17 9.86 9.86 0 009.2 6.83 19.76 19.76 0 01-12.23 4.22A20 20 0 010 34.58 27.87 27.87 0 0015.1 39c18.11 0 28-15 28-28V9.73A20 20 0 0048 4.61z" nd-pin-path-child="html_body_section_div_ul_li2_a_svg_path"></path>
                                    </svg>
                                </div>
                                <div class="item">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" nd-pin-path-child="html_body_section_div_ul_li3_a_svg" class="icon">
                                        <path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4zm0 122.5c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84zM390.5 91.3c-16.7 0-30.2 13.5-30.2 30.2s13.5 30.2 30.2 30.2 30.2-13.5 30.2-30.2-13.5-30.2-30.2-30.2z" nd-pin-path-child="html_body_section_div_ul_li3_a_svg_path"></path>
                                    </svg>
                                </div>
                                <div class="item">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon" nd-pin-path-child="html_body_section_div_ul_li4_a_svg">
                                        <path d="M44.45 0H3.54A3.5 3.5 0 000 3.46v41.08A3.51 3.51 0 003.54 48h40.91A3.51 3.51 0 0048 44.54V3.46A3.51 3.51 0 0044.45 0zM14.24 40.9H7.11V18h7.13v22.9zm-3.56-26a4.13 4.13 0 114.13-4.13 4.13 4.13 0 01-4.13 4.09zm30.23 26h-7.13V29.76c0-2.66 0-6.07-3.7-6.07s-4.27 2.9-4.27 5.88V40.9H18.7V18h6.82v3.13h.1a7.48 7.48 0 016.74-3.7c7.21 0 8.54 4.74 8.54 10.91V40.9z" nd-pin-path-child="html_body_section_div_ul_li4_a_svg_path"></path>
                                    </svg>
                                </div>
                                <div class="item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" class="icon" height="22" viewBox="0 0 31.315 21.998" nd-pin-path-child="html_body_section_div_ul_li5_a_svg">
                                        <path d="M30.661 3.435A3.929 3.929 0 0027.892.657C25.45.002 15.658.002 15.658.002s-9.792 0-12.234.657A3.929 3.929 0 00.655 3.437 41.047 41.047 0 000 11.002a41.047 41.047 0 00.654 7.564 3.929 3.929 0 002.769 2.778c2.442.658 12.235.658 12.235.658s9.792 0 12.234-.657a3.929 3.929 0 002.769-2.778 41.047 41.047 0 00.654-7.565 41.047 41.047 0 00-.654-7.567zM12.526 15.713V6.285l8.136 4.717z" nd-pin-path-child="html_body_section_div_ul_li5_a_svg_path">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="logos">
                            <div class="left">
                                <div class="item-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="logo" nd-pin-path-child="html_body_section_div_ul_li1_a_svg">
                                        <path d="M45.35 0H2.65A2.65 2.65 0 000 2.65v42.7A2.65 2.65 0 002.65 48h23V29.41h-6.27v-7.24h6.26v-5.34c0-6.2 3.79-9.58 9.32-9.58a51 51 0 015.59.28V14h-3.84c-3 0-3.59 1.43-3.59 3.53v4.62h7.17l-.93 7.24h-6.24V48h12.23A2.65 2.65 0 0048 45.35V2.65A2.65 2.65 0 0045.35 0" nd-pin-path-child="html_body_section_div_ul_li1_a_svg_path"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="right">
                                <div class="item-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="logo" nd-pin-path-child="html_body_section_div_ul_li1_a_svg">
                                        <path d="M45.35 0H2.65A2.65 2.65 0 000 2.65v42.7A2.65 2.65 0 002.65 48h23V29.41h-6.27v-7.24h6.26v-5.34c0-6.2 3.79-9.58 9.32-9.58a51 51 0 015.59.28V14h-3.84c-3 0-3.59 1.43-3.59 3.53v4.62h7.17l-.93 7.24h-6.24V48h12.23A2.65 2.65 0 0048 45.35V2.65A2.65 2.65 0 0045.35 0" nd-pin-path-child="html_body_section_div_ul_li1_a_svg_path"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="contact">
                            <div class="content">
                                <div class="info"><span>Contato:</span></div>
                                <div class="itens">
                                    <div class="item">
                                        <div class="icon-content">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon" nd-pin-path-child="html_body_section_div_ul_li4_a_svg">
                                                <path d="M44.45 0H3.54A3.5 3.5 0 000 3.46v41.08A3.51 3.51 0 003.54 48h40.91A3.51 3.51 0 0048 44.54V3.46A3.51 3.51 0 0044.45 0zM14.24 40.9H7.11V18h7.13v22.9zm-3.56-26a4.13 4.13 0 114.13-4.13 4.13 4.13 0 01-4.13 4.09zm30.23 26h-7.13V29.76c0-2.66 0-6.07-3.7-6.07s-4.27 2.9-4.27 5.88V40.9H18.7V18h6.82v3.13h.1a7.48 7.48 0 016.74-3.7c7.21 0 8.54 4.74 8.54 10.91V40.9z" nd-pin-path-child="html_body_section_div_ul_li4_a_svg_path"></path>
                                            </svg>
                                        </div>
                                        <span>(41) 995959595</span>
                                    </div>
                                    <div class="item">
                                        <div class="icon-content">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon" nd-pin-path-child="html_body_section_div_ul_li4_a_svg">
                                                <path d="M44.45 0H3.54A3.5 3.5 0 000 3.46v41.08A3.51 3.51 0 003.54 48h40.91A3.51 3.51 0 0048 44.54V3.46A3.51 3.51 0 0044.45 0zM14.24 40.9H7.11V18h7.13v22.9zm-3.56-26a4.13 4.13 0 114.13-4.13 4.13 4.13 0 01-4.13 4.09zm30.23 26h-7.13V29.76c0-2.66 0-6.07-3.7-6.07s-4.27 2.9-4.27 5.88V40.9H18.7V18h6.82v3.13h.1a7.48 7.48 0 016.74-3.7c7.21 0 8.54 4.74 8.54 10.91V40.9z" nd-pin-path-child="html_body_section_div_ul_li4_a_svg_path"></path>
                                            </svg>
                                        </div>
                                        <span>(41) 995959595</span>
                                    </div>
                                    <div class="item">
                                        <div class="icon-content">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon" nd-pin-path-child="html_body_section_div_ul_li4_a_svg">
                                                <path d="M44.45 0H3.54A3.5 3.5 0 000 3.46v41.08A3.51 3.51 0 003.54 48h40.91A3.51 3.51 0 0048 44.54V3.46A3.51 3.51 0 0044.45 0zM14.24 40.9H7.11V18h7.13v22.9zm-3.56-26a4.13 4.13 0 114.13-4.13 4.13 4.13 0 01-4.13 4.09zm30.23 26h-7.13V29.76c0-2.66 0-6.07-3.7-6.07s-4.27 2.9-4.27 5.88V40.9H18.7V18h6.82v3.13h.1a7.48 7.48 0 016.74-3.7c7.21 0 8.54 4.74 8.54 10.91V40.9z" nd-pin-path-child="html_body_section_div_ul_li4_a_svg_path"></path>
                                            </svg>
                                        </div>
                                        <span>(41) 995959595</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-copyright">
                            <div class="container">
                                Made by <span><span>Team Micro</span> Software Development </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;