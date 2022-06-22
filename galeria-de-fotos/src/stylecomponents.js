import styled from 'styled-components'

export const Container = styled.div`
    background-color: #1B2430;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    overflow: scroll;
`
export const ContaneinerData = styled.div`
    background-color: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 972px;
    color: #fff;
    text-align: center;
    padding-top: 30px;
    h1 {
        padding-bottom: 30px;
    }
`
export const NoneImage = styled.div`
    h2 {
        color: #fff;
    }
    div{
        font-size: 80px;
    }
`
export const DivAling = styled.div `
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding-top: 50px;
`
export const UpLoadForm = styled.form`
    background-color: #303F43;
    width: 800px;
    padding: 18px;
    display: flex;
    border-radius: 15px ;
`
export const InputFile = styled.input`
    background-color: #303F43;
    padding: 8px 16px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
`
export const InputButton = styled.input`
    border-radius: 10px;
    border: none;
    padding: 0 15px;
    font-size: 15px;
    background-color: #756df4; 
    color: #fff;
    cursor: pointer;
    margin-right: 15px;
    :hover {
        opacity: 90%;
    }
`