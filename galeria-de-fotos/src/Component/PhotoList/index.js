import styled from "styled-components"
import { deletPhoto } from "../../Services/Photos"

export function PhotoList(item) {
    const handleDelet = async (data) => {
        await deletPhoto(data)
        alert('Imagem removida com sucesso')
        document.location.reload()
    }
    return (
        <AlingIntes>
            <ContainerImage>
                <img src={item.url} alt={item.name} />
                <button onClick={() => handleDelet(item.name)}>🗑️</button>
            </ContainerImage>
        </AlingIntes>
    )
}
const AlingIntes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
`
const ContainerImage = styled.div`
    background-color: #303F43;
    border-radius: 10px;
    padding: 10px;
    width: 120px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px ;
    margin-bottom:30px ;
    img {
        width: 100%;
        height: 100%;
        margin-bottom: 5px ;
        border-radius: 10px;
        display: block;
    }
    button {
        border: none;
        background: none;
        font-size: 30px;
        cursor: pointer;
    }
`
