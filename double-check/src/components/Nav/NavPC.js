import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
const Navbar = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 108px;
`;
const Logo = styled.a`
    color: var(--ain, #3a42bf);
    font-family: Pretendard;
    font-size: 26px;
    font-weight: 700;
`;
const Navblock = styled.div`
    width: 700px;
    display: flex;
    justify-content: space-between;
`;
const Linkblock = styled.div`
    width: 800px;
    display: flex;
    justify-content: space-between;
    color: var(--black, #000);
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
function NavPC() {
    return (
        <Navbar>
            <Logo href="/main">DOUBLE CHECK</Logo>
            <Navblock>
                <Linkblock>
                    <Link to="/check">허위 사실 판단기</Link>
                    <Link to="/search">키워드 검색</Link>
                    <Link to="/trend">현재 트렌드</Link>
                    <Link to="/report">신고하기</Link>
                    <Link to="/about">서비스 소개</Link>
                </Linkblock>
            </Navblock>
        </Navbar>
    );
}

export default NavPC;
