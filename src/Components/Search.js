

export default function Search(){
    const SearchTeams = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const query = "Florida State"
        const url = `https://api.collegefootballdata.com/games/media?year=2021&team=${query}`;
        const res = await fetch(url);
        const data  = await res.json();
        console.log(data);
    }


        return (

            <div>
                <form className="form" onSubmit={SearchTeams}>
                    <input className="search" type="text" name="query"
                        placeholder="Enter your team name here" />
                    <br />
                    <br />
                    <button className="button" type="submit">Search</button>
                </form>
            </div>
        )
    }



