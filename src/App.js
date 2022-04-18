
import './App.css';
import {Box, Container} from '@mui/material';
import Content from './Content';


function App() {
  return (
    <Box 
      sx={{
        background: 'rgba(255,255,255,.1)'
      }}
    >
      <Container
        sx={{
          display: 'flex',
        }}
      >
        <Content />
      </Container>
    </Box>
  );
}

export default App;
