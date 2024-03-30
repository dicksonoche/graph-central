export async function fetchProjects() {
    const headers = {
        'X-RapidAPI-Key': '1232ac698amsh9da46ede49859ffp14bb7bjsnbbcd6a1171f6',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }

    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=Qwsogvtv82FCd&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}