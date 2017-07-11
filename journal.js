var array = [];
var totalProfit=0.0;
var tableExists=false;

function trade(ticker, entry, exit, quantity)
{
    this.ticker=ticker;
    this.entry=parseFloat(entry).toFixed(2);
    this.exit=parseFloat(exit).toFixed(2);
    this.quantity=parseInt(quantity);
    this.cost=(quantity*entry).toFixed(2);
    this.gross=(quantity*exit).toFixed(2);
    this.profit=this.gross-this.cost;
    totalProfit+=this.profit;
    array.push(this);
};

function save()
{
    var ticker= document.getElementById("ticker").value;
    var entry= document.getElementById("entry").value;
    var exit= document.getElementById("exit").value;
    var quantity= document.getElementById("quantity").value;



    if (!(ticker==""||entry==""||exit==""||quantity==""))
    {

        new trade(ticker,entry,exit,quantity);
    }

    print_table();

}

function print_table()
{
    var output_box=document.getElementById("output_box");
    var table=document.createElement("TABLE");

    var header=table.createTHead();

    var headerRow = header.insertRow(0);
	headerRow.innerHTML="<th>Ticker</th><th>Entry Price</th><th>Exit Price</th><th>Quantity</th><th>Total Cost</th><th>Gross Income</th><th>Total Profit</th>";




    var TRADE;
    var totalProfit = 0;

    for (var i=0; i<array.length; i++)
    {
        TRADE=array[i];

        var row = table.insertRow(0);
        row.innerHTML="<td>"+TRADE.ticker+"</td><td>"+TRADE.entry+"</td><td>"+TRADE.exit+"</td><td>"+TRADE.quantity+"</td><td>"+TRADE.cost+"</td><td>"+TRADE.gross+"</td><td>"+TRADE.profit.toFixed(2)+"</td>";





        totalProfit+=TRADE.profit;
        table.appendChild(row);

    }


	table.classList.add('journal_output_table');

    output_box.innerHTML="";
    output_box.appendChild(table);


    output_box.innerHTML+="Total profit: <h4 style=\"display:inline\" id=\"profit\"></h5>";
    profit=document.getElementById("profit");

    profit.innerHTML="$"+parseFloat(totalProfit).toFixed(2);

    if(totalProfit<0)
        profit.style.color="red";
    else if (totalProfit>0)
        profit.style.color="green";

}