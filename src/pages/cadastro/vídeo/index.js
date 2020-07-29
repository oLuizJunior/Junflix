import React from 'react';
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';

function CasdastroVideo(){
    return (
      <PageDefault>
        <h1>Casdastro de Vídeo</h1>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default CasdastroVideo;