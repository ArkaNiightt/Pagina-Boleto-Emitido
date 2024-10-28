
// Selecionar o número do pedido
const pedido = Math.random()

// Selecionar o valor do pedido
const valor = 299.00

// Selecionar a data de vencimento
const vencimento = new Date()

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

