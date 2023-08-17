import React from 'react';
import { styled } from 'styled-components';

const Footer = styled.div`
    background: #000;
    height: 112px;
    padding: 17px 52px;
    display: flex;
    align-items: center;
`;

const Table = styled.table`
    width: 20em;
    color: var(--white, #fff);
    font-family: Pretendard;
    font-size: 10px;
    font-weight: 500;
    line-height: 2;
`;

const Th = styled.th`
    font-weight: 700;
    text-align: left;
`;

const Logo = styled.p`
    color: var(--white, #fff);
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const SNS = styled.div`
    width: 92px;
    display: flex;
    justify-content: space-between;
`;
function FooterPC() {
    return (
        <Footer>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <Logo>DOUBLE CHECK</Logo>
                    <Table>
                        <Th>Design</Th>
                        <td>김채이</td>
                        <td>김채현</td>
                        <tr></tr>
                        <Th>Front-end</Th>
                        <td>김채현</td>
                        <td>노하림</td>
                        <td>허은</td>
                        <tr></tr>
                        <Th>Back-end</Th>
                        <td>김나리</td>
                        <td>이서진</td>
                    </Table>
                </div>
            </div>
        </Footer>
    );
}

export default FooterPC;
