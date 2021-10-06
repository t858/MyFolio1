calculateResult=()=>{

    let Investment = document.getElementById("Investment").value
    let InvestWithCommas = (Investment.split(" ")[0]);
    let amount = parseInt(InvestWithCommas.split(",").join(" "));


    let years = document.getElementById("year").value



    let Return_Rate = document.getElementById("return_rate").value
    let ReturnWithCommas = (Return_Rate.split(" ")[0]);
    let ReturnRate = parseInt(ReturnWithCommas.split(",").join(" "));


    let checkedValue = document.getElementsByName("checked")[0].checked;
    let wealthGained = 0; maturityValue = 0; total = 0

    
    if(document.getElementsByName('checked')[0].checked){

        document.getElementById('mode-1').innerHTML = document.getElementsByName('checked')[0].value
        document.getElementById('mode-2').innerHTML = document.getElementsByName('checked')[0].value
        document.getElementById('mode-3').innerHTML = document.getElementsByName('checked')[0].value
    }
    if(document.getElementsByName('checked')[1].checked){

        document.getElementById('mode-1').innerHTML = document.getElementsByName('checked')[1].value
        document.getElementById('mode-2').innerHTML = document.getElementsByName('checked')[1].value
        document.getElementById('mode-3').innerHTML = document.getElementsByName('checked')[1].value
    }
    if(checkedValue){

        wealthGained = Math.round((Math.pow(1 + (Math.pow((1 + ReturnRate/1000), (1 / 12)) - 1)), (years * 12)) / (Math.pow((1 + ReturnRate/ 100), (1 / 12)) - 1) * amount) 

        total = (amount * 12)*years
    }
    else{
        total = amount
        wealthGained = Math.round(Math.pow((1 + ReturnRate / 100), years) * amount)
    }

    maturityValue = wealthGained-total;
    total = total.toString();
    total = total.replace(/\B(?=(\d{3}) + (?!\d))/g, ",")
    wealthGained = wealthGained.toString();
    wealthGained = wealthGained.replace(/\B(?=(\d{3}) + (?!\d))/g, ",")
    maturityValue = maturityValue.toString();
    maturityValue = maturityValue.replace(/\B(?=(\d{3}) + (?!\d))/g, ",")
    document.getElementById("Investment").value = ''
    document.getElementById("return_rate").value = ''
    console.log(total,typeof total);
    document.getElementById('print1').innerHTML = total==="NaN"?"0":total
    document.getElementById('print2').innerHTML = wealthGained==="NaN"?"0":wealthGained
    document.getElementById('print3').innerHTML = maturityValue==="NaN"?"0":maturityValue
}


currencyChange=()=>{

    let SelectedValue = currency.value;
    document.getElementById('print_est_return').innerHTML = SelectedValue
    document.getElementById('print_est_return1').innerHTML = SelectedValue
    document.getElementById('print_est_return2').innerHTML = SelectedValue
}

commas=(x)=> {
    let amount = document.getElementById("Investment").value;
    let temp = amount.split(" ")
    if(temp.includes("Rs")){
        amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }else{
        amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("Investment").value = amount.concat(' ').concat('Rs')
    }
}

percentage=(x)=>{
    let value = document.getElementById("return_rate").value;
    let temp = value.split(" ");
    if(temp.length<2)
        document.getElementById("return_rate").value = value.concat(' ').concat('%')
}
