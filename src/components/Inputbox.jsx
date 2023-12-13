import { useId } from 'react'

function Inputbox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisabled = false,
        currencyDisabled = false
    }

) {
    const amountInputId = useId();
    return (
        <div className='flex w-full mb-5 justify-between'>
            <label htmlFor={amountInputId}>{label}</label>
            <div className='w-3/4 flex justify-end sm:w-4/5 md:w-11/12'>
                <input
                    className='border rounded border-slate-300 outline-blue-600 p-1 w-1/2 sm:w-3/4'
                    id={amountInputId}
                    type='tel'
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
                <select
                    className='border rounded border-slate-300 outline-blue-600 p-1 ms-5'
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {
                        currencyOptions.map((curr) => (
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
export default Inputbox