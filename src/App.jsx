
import { useState } from 'react'
import { Inputbox } from './components/Index'
import useCurrency from './hooks/useCurrency'
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);
  
  const swap = () => {
    setFrom(to);
    setTo(from);
    // setConvertedAmount(amount);
    // setAmount(setConvertedAmount);
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div className="bg-blue-100 h-screen w-full">
      <div className="container mx-auto px-3 py-12 flex justify-center">
        <form onSubmit={(e) => {
          e.preventDefault();
          convert()
        }} className='border rounded border-slate-400 p-3 flex flex-col items-center w-full sm:w-3/4'>
          <h2 className='text-lg font-bold mb-5'>Currency Converter</h2>
          <Inputbox
            label="from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          // amountDisabled
          // currencyDisabled
          />
          <button onClick={swap} className='border rounded border-blue-400 bg-blue-400 w-fit p-1 text-white mb-5'>swap</button>
          <Inputbox
            label="to"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}
            amountDisabled
          //currencyDisabled
          />
          <button type='submit' className='border rounded border-blue-400 bg-blue-400 w-fit p-1 text-white mb-5'>convert {from} to {to}</button>
        </form>
      </div>
    </div>
  )
}
export default App
