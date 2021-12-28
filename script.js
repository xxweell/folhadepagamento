function callingFunction() {
  let variavel = document.querySelector('input#valor').value
  let inputValue = parseFloat(variavel)
  calculateDiscount(inputValue)
  // return inputValue
}

function calculateDiscount(inputValue) {
  let upperLimiValue = inputValue
  let range1 = upperLimiValue >= 0 && upperLimiValue <= 1581.75
  let range2 = upperLimiValue > 1581.75 && upperLimiValue <= 2636.25
  let range3 = upperLimiValue > 2636.25 && upperLimiValue <= 3690.15
  let range4 = upperLimiValue > 3690.15 && upperLimiValue <= 4745.25
  let range5 = upperLimiValue > 4745.25 && upperLimiValue <= 5799.75
  let range6 = upperLimiValue > 5799.75 && upperLimiValue <= 6433.57
  let range7 = upperLimiValue > 6433.57

  let percentage1 = 0.11
  let percentage2 = 0.12
  let percentage3 = 0.13
  let percentage4 = 0.14
  let percentage5 = 0.15
  let percentage6 = 0.155
  let percentage7 = 0.16

  let deduction2 = 15.82
  let deduction3 = 42.18
  let deduction4 = 79.09
  let deduction5 = 126.54
  let deduction6 = 155.54
  let deduction7 = 187.71

  if (range1) {
    let result1 = upperLimiValue * percentage1
    // document.querySelector('strong').innerHTML = result1.toFixed(2)
    //alert('Valor do desconto R$ ' + result1.toFixed(2))
    Swal.fire('Valor do desconto R$ ' + result1.toFixed(2))
  } else if (range2) {
    let result2 = upperLimiValue * percentage2 - deduction2
    // document.querySelector('strong').innerText = result2.toFixed(2)
    alert('Valor do desconto R$ ' + result2.toFixed(2))
  } else if (range3) {
    let result3 = upperLimiValue * percentage3 - deduction3
    // document.querySelector('strong').innerText = result3.toFixed(2)
    alert('Valor do desconto R$ ' + result3.toFixed(2))
  } else if (range4) {
    let result4 = upperLimiValue * percentage4 - deduction4
    // document.querySelector('strong').innerText = result4.toFixed(2)
    alert('Valor do desconto R$ ' + result4.toFixed(2))
  } else if (range5) {
    let result5 = upperLimiValue * percentage5 - deduction5
    // document.querySelector('strong').innerText = result5.toFixed(2)
    alert('Valor do desconto R$ ' + result5.toFixed(2))
  } else if (range6) {
    let result6 = upperLimiValue * percentage6 - deduction6
    // document.querySelector('strong').innerText = result6.toFixed(2)
    alert('Valor do desconto R$ ' + result6.toFixed(2))
  } else if (range7) {
    let result7 = upperLimiValue * percentage7 - deduction7
    // document.querySelector('strong').innerHTML = result7.toFixed(2)
    alert('Valor do desconto R$ ' + result7.toFixed(2))
  } else {
    //   document.querySelector('strong').innerText =
    //     'Valor informado está fora das faixas possíveis!'
    // }
    alert('Valor informado é menor que ZERO!!')
  }
}

// let button = document.querySelector('button')
// button.onclick = calculateDiscount // só irá rodar quando o botão for clicado
