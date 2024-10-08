const countryName = new URLSearchParams(location.search).get('name')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json())
.then((countryData) => {
    countryData.forEach((country) => {

        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card-container')
        const backButton = document.querySelector('.back-button')
        
        let countryNativeName = country.name.nativeName

        if(countryNativeName) {
            countryNativeName = Object.values(country.name.nativeName)[0].common
        } else {
            countryNativeName = country.name.common
        }

        let subRegion = country.subregion

        if (subRegion) {
            subRegion = country.subregion
        } else {
            subRegion = 'N/A'
        }

        let capital = country.capital

        if (capital) {
            capital = country.capital
        } else {
            capital = 'N/A'
        }

        let currencies = country.currencies
        let currenciesSymbol

        if (currencies) {
            currencies = Object.values(country.currencies)[0].name
            currenciesSymbol = `(${Object.values(country.currencies)[0].symbol})`
        } else {
            currencies = 'N/A'
            currenciesSymbol =''
        }

        let languages = country.languages

        if (languages) {
            languages = Object.values(country.languages).join(', ')
        } else {
            languages = 'N/A'
        }

        cardContainer.innerHTML = `
        <img src="${country.flags.svg}" alt="">
            <div class="card-content">
                <h1>${country.name.common}</h1>
                <div class="card-content-main">
                    <div class="left-column">
                        <p>Native Name: <span>${countryNativeName}</span></p>
                        <p>Population: <span>${new Intl.NumberFormat('en-US').format(country.population)}</span></p>
                        <p>Region: <span>${country.region}</span></p>
                        <p>Sub Region: <span>${subRegion}</span></p>
                        <p>Capital: <span>${capital}</span></p>
                    </div>
                    <div class="right-column">
                        <p>Top Level Domain: <span>${country.tld[0]}</span></p>
                        <p>Currencies: <span>${currencies} ${currenciesSymbol}</span></p>
                        <p>Language: <span>${languages}</span></p>
                    </div>
                </div>
                <div class="card-content-bottom">
                    <p>Border Countries: </p>
                    <div class="tags">
                    </div>
                </div>
            </div>
            
        `

        backButton.append(cardContainer)

        let countryBorders = country.borders
        
        if (countryBorders) {
            countryBorders.forEach((border) => {
                fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([borderCountry]) => {
                    const countryTags = document.createElement('a')
                    const tags = document.querySelector('.tags')
                    countryTags.href = `country.html?name=${borderCountry.name.common}`
                    countryTags.innerHTML = borderCountry.name.common
                    tags.append(countryTags)
                })
            })
        }

    })
})

//Dark Mode

const darkMode = document.querySelector('.dark-mode')
const lightMode = document.querySelector('.light-mode')
const body = document.querySelector('body')

darkMode.addEventListener('click', () => {
    body.classList.toggle('dark')
    lightMode.style.display = 'flex'
    darkMode.style.display = 'none'
})

lightMode.addEventListener('click', () => {
    body.classList.toggle('dark')
    lightMode.style.display = 'none'
    darkMode.style.display = 'flex'
})
