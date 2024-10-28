// Função para extrair as informações de pedido, valor e vencimento
document.addEventListener("DOMContentLoaded", function () {
    // Selecionar o número do pedido
    const pedido = document.querySelector(".transaction_token_PPCPMTB5FJC503").textContent.trim();
  
    // Selecionar o valor do pedido
    const valor = document.querySelector(".btn.btn-outline-info").textContent.trim();
  
    // Selecionar a data de vencimento
    const vencimento = document.querySelector(".btn.btn-outline-danger").textContent.trim();
  
    // Exibir as informações no console
    console.log("Pedido: ", pedido);
    console.log("Valor: ", valor);
    console.log("Vencimento: ", vencimento);
  
    // Adicionar as informações no elemento HTML especificado
    const infoContainer = document.querySelector(".bg-gray-50.p-4.rounded-lg.mb-6");
    if (infoContainer) {
      infoContainer.innerHTML = `
        <p class="text-sm text-gray-500">
          <span class="font-semibold">Número do Pedido:</span> ${pedido}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-semibold">Valor:</span> ${valor}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-semibold">Vencimento:</span> ${vencimento}
        </p>
      `;
    }
  });
  