import { Box, Button, TextField, Typography } from '@mui/material';
import { listBooks } from "../../../../_mock/listBooks"
import PrimaryCard from "../../../atom/PrimaryCard"



const AdminUpdateBooksPage = () => {

    const books = listBooks

    return(
        <Box sx={{width:"50vw", padding:"32px"}}>
        <Box sx={{display:"flex", flexDirection:"column", gap:2, justifyContent:"center", height:"100%"}}>       
          <Typography variant='h5' sx={{fontWeight:"bold"}}>Add New Books</Typography>
          <TextField label="Name Books" sx={{width:"100%"}}/>
          <TextField label="Author" sx={{width:"100%"}}/>
          <TextField label="Description" sx={{width:"100%"}}/>
          <Button variant='contained' sx={{width:"100%"}}>Add</Button>
          <Box sx={{display:"flex", gap:2, alignItems:"center"}}>
          </Box>
        </Box>
      </Box>
    )
}

export default AdminUpdateBooksPage