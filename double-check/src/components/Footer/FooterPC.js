import React from 'react';
import { styled, css } from 'styled-components';

const Footer = styled.div`
    background: var(--ain, #3a42bf);
    height: 218px;
    padding: 55px;
    display: flex;
    justify-content: center;
`;

const Table = styled.table`
    width: 280px;
    color: var(--white, #fff);
    font-family: Pretendard;
    font-size: 10px;
    line-height: 2;
`;
const Thead = styled.thead`
    font-weight: 700;
    text-align: left;
    border-collapse: collapse;
`;
const Th = styled.th`
    font-weight: 700;
    text-align: left;
    border-collapse: collapse;

    /* th 요소들 사이의 간격을 30px로 조정합니다. */
    ${(props) =>
        props.gap &&
        css`
            &:not(:first-child) {
                margin-right: 30px;
            }
        `}
`;
const Tbody = styled.tbody`
    font-weight: 500;
`;
const Content = styled.div`
    display: flex;
`;
const Logo = styled.p`
    color: var(--white, #fff);
    font-family: Pretendard;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Team = styled.div`
    color: var(--white, #fff);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: 12px;
`;
const TeamLogo = styled.p``;
function FooterPC() {
    return (
        <Footer>
            <div>
                <Table>
                    <Thead>
                        <Th colSpan={2}>Design</Th>
                        <Th colSpan={3}>Front-end</Th>
                        <Th colSpan={2}>Back-end</Th>
                    </Thead>
                    <Tbody>
                        <td>김채이</td>
                        <td>김채현</td>
                        <td>김채현</td>
                        <td>노하림</td>
                        <td>허은</td>
                        <td>김나리</td>
                        <td>이서진</td>
                    </Tbody>
                </Table>
                <Content>
                    <Logo>DOUBLE CHECK</Logo>
                    <Team>
                        <TeamLogo>Heo SSERAFIM</TeamLogo>
                    </Team>
                </Content>
            </div>
        </Footer>
    );
}

export default FooterPC;
