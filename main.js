import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicalizarFiltros } from "./src/filtrosCatalogo";
import { inicalizarCarrinho, renderizarProdutosCarrinho, atualizarPrecoCarrinho } from "./src/menuCarrinho";



renderizarCatalogo();
inicalizarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicalizarFiltros();