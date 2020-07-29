import React from 'react';
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria(){
    return (
      <PageDefault>
        <h1>Casdastro de Categoria</h1>

        <from>
          <label>
            Nome da Categoria
            <input type="text" />
          </label>

          <button>
            Cadastrar
          </button>
        </from>

        <Link to="/">
            Ir para a Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;