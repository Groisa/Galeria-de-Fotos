import { Container, ContaneinerData, DivAling, InputButton, InputFile, NoneImage, UpLoadForm } from "./stylecomponents";
import { getPhoto, uploadPhoto } from './Services/Photos'
import { useState } from "react";
import { useEffect } from "react";
import { PhotoList } from "./Component/PhotoList";
function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState('')
  const [uploading, setUploading] = useState(false)
  useEffect(() => {
    const getPhotoAll = async () => {
      setLoading(true)
      let photo = await getPhoto()
      setPhotos(photo)
      setLoading(false)
    }
    getPhotoAll()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const file = formData.get('file')
    if(file && file.size > 0) {
      setUploading(true)
      await uploadPhoto(file)
      alert('Imagem adicionada com sucesso')
      setUploading(false)
      document.location.reload()
    }
  }
  return (
    <Container>
      <ContaneinerData>
        <h1>Galeria De fotos</h1>
        <UpLoadForm method="POST" onSubmit={handleSubmit}>
          <InputFile type='file' name='file'/>
          <InputButton type='submit' value='Enviar'/>
          {uploading && <p>Enviando....</p>}
        </UpLoadForm>
        {loading &&
          <NoneImage>
            <div>🤚</div>
            <h2>Carregando...</h2>
          </NoneImage>
        }
        {!loading && photos.length === 0 &&
          <NoneImage>
            <div>😞</div>
            <h2>Sem Fotos</h2>
          </NoneImage>
        }
        <DivAling>
          {photos.length > 0 && (
            photos.map((item, index) => (
              <PhotoList key={index} url={item.url} name={item.name} />
            ))
          )}
        </DivAling>
        
      </ContaneinerData>
    </Container>
  );
}

export default App;
