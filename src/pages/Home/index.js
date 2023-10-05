import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (

    <Typography variant="body2" color="#053C54" align="center">
      {'FASE 2 CRIAR SERVIÇOS WEB COM REST 04/10/2023, Professor Bruno Rafael. '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:3333/produtos');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  const renderProducts = () => {
    return produtos.map((produto) => (
      <Grid item key={produto.id} xs={12} sm={6} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="div"
            sx={{
              pt: '90%',
            }}
            image={produto.urlImagem}
          />
          <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">{produto.nome}</Typography>
          <Typography>{produto.descricao}</Typography>
          <Typography>Preço Atual: {produto.precoAtual}</Typography>
          <Typography>Preço de Promoção: {produto.precoPromocao}</Typography>
          <Typography>Quantidade: {produto.quantidade}</Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Box
          sx={{
            bgcolor: '#053C54',
            pt: 5,
            pb: 5,
          }}
        >
          <Toolbar>
            <AddShoppingCartIcon sx={{ fontSize: 48, mr: 1 }} />
            <Typography variant="h4" color="inherit" noWrap sx={{ marginRight: 4, fontWeight: 'bold' }}>
              UniMercado
            </Typography>
            <Typography variant="h4" color="inherit" noWrap sx={{ fontSize: 48, fontWeight: 'bold' }}>
              <Box
                sx={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#000000',
                  display: 'inline-block',
                  marginRight: 4,
                }}
              >
                <Link to="/cadastroProduto">
                  <button
                    style={{
                      backgroundColor: '#267CA0',
                      color: 'white',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '17px',
                    }}
                  >
                    Cadastrar Produto
                  </button>
                </Link>
              </Box>
              <Box
                sx={{
                  bgcolor: '#053C54',
                  display: 'inline-block',
                  marginRight: 4,
                }}
              >
                <Link to="/RemoverProduto">
                  <button
                    style={{
                      backgroundColor: '#267CA0',
                      color: 'white',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '17px',
                    }}
                  >
                    Remover Produto
                  </button>
                </Link>
              </Box>
              <Box
                sx={{
                  bgcolor: '#053C54',
                  display: 'inline-block',
                  marginRight: 4,
                }}
              >
                <Link to="/Signin">
                  <button
                    style={{
                      backgroundColor: '#267CA0',
                      color: 'white',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '17px',
                    }}
                  >
                    Sair do Sistema
                  </button>
                </Link>
              </Box>
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: '#267CA0',
            pt: 5,
            pb: 5,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <Box
                sx={{
                  color: '#000000',
                  fontWeight: 'bold',
                }}
              >
                PRODUTOS
              </Box>
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              <Box
                sx={{
                  bgcolor: '000000',
                  fontWeight: 'semi-bold',
                }}
              >
                (Grupo: Ana Alice Albuquerque Marques, Arthur Loureiro Arruda, Maria Esther Gonçalves de Lima, Nicole Lima Crispim)
              </Box>
            </Typography>
            <Stack sx={{ pt: 0 }} direction="row" spacing={2} justifyContent="center">
              {/* Aqui você pode adicionar qualquer componente adicional desejado */}
            </Stack>
          </Container>
        </Box>

        <Box
          sx={{
            bgcolor: '#267CA0',
            pt: 5,
            pb: 5,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {renderProducts()}
            </Grid>
          </Container>
        </Box>
      </main>
      <Box sx={{ bgcolor: '#053C54', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          FASE 2 CRIAR SERVIÇOS WEB COM REST 05/10/2023, Professor Bruno Rafael!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}

export default Home;