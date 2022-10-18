import { Box, Button, Modal, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { getBooks } from './Api';
import './App.css';
import { Book } from './entities';


function App() {
  const [loadedBooks, setLoadedBooks] = useState<Book[]>([])
  const [newBookTitle ,setNewBookTitle] = useState<string>("")
  const [newBookLength ,setNewBookLength] = useState<string>("")
  const [open, setOpen]= useState(false)

  const handleClose = () => setOpen(false)

  const handleChangeOfNewBookTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setNewBookTitle(event.target.value);
  };
  const handleChangeOfNewBookLength = (event: ChangeEvent<HTMLInputElement>) => {
   setNewBookLength(event.target.value);
  };
  const handleGetAllBooks = async () => {
    setLoadedBooks(await getBooks())
  }

  const handleGetBookById = (name:string, length:string) => {
    setOpen(!open)
    
    //setLoadedBooks([...loadedBooks, await getBook()])
  }
  return (
    <>
    {open ? (
      <>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={{position: "absolute", top: "50%",left: "50%",transform: "translate(-50%, -50%)", backgroundColor:"#fff", p:3, border: "1px solid #000"}}>
              <TextField id="outlined-basic" label="Név" variant="outlined" value={newBookTitle} onChange={handleChangeOfNewBookTitle} sx={{mr:5}} />
              <TextField id="outlined-basic" label="Hossz" variant="outlined" type="number" value={newBookLength} onChange={handleChangeOfNewBookLength} />
              <div style={{textAlign:"center", marginTop:30}}>
                <Button variant="contained" onClick={()=>{handleGetBookById(newBookTitle,newBookLength)}}>Feltöltés</Button>
              </div>
            </Box>
          </Modal>
      </>
    ) : (<></>)
    }
    <Button variant="contained" onClick={handleGetAllBooks}>Könyvek</Button>
    <Button variant="contained" onClick={()=>{setOpen(!open)}}>Hozzáadás</Button>
    </>
  );
}

export default App;
