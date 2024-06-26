import styled from "styled-components";

export const UsersContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    overflow-y: scroll;

    h1 {
        margin-bottom: 10px;
    }

    div:first-of-type {
        width: 100%;
        display: flex;
        justify-content: center;

        div {
            width: 1200px;
            display: flex;
            justify-content: end;
            margin-bottom: 20px;

            button {
                padding: 10px 5px;
                border: 0;
                color: white;
                font-weight: bold;
                background-color: #008000;
                cursor: pointer;
                border-radius: 6px;
            }
        }
    }
`;

export const TableContainer = styled.table`
    width: 1200px;
    max-width: 1200px;
    border-collapse: collapse;
`;

export const TableHeader = styled.tr`
    background-color: #1b75bb;
    color: white;
    td {
        padding: 8px;
        text-align: center;
        font-weight: bold;
    }
`;