import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Holly Williams, Erin Lyall",
            "title": "Israel kibbutz the scene of a Hamas \"massacre,\" first responders say: \"The depravity of it is haunting\" - CBS News",
            "description": "\"The depravity of it is haunting,\" an Israeli military official told CBS News of the scene in Kfar Aza, where an emergency responder says even babies were beheaded.",
            "url": "https://www.cbsnews.com/news/israel-babies-killed-hamas-terror-attack-kibbutz-kfar-aza-first-responders-say/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/10/11/1df8a41e-c6da-4ff4-af93-4296aa811267/thumbnail/1200x630/ceefbf365a21e71fa1a83c453ca705d9/israel-kafr-azah-1728299508.jpg?v=69042d5753ca4b526d6a54f60ee177ca",
            "publishedAt": "2023-10-11T14:14:00Z",
            "content": "Near Sderot, Israel — Israeli emergency responders with years of experience doing the grim work of recovering bodies broke down in tears Wednesday as they told CBS News what they'd witnessed in the a… [+3282 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Israeli PM Netanyahu, opposition leader Gantz to form emergency unity gov’t - Al Jazeera English",
            "description": "The two leaders agree to form a war cabinet comprising Netanyahu, Gantz and Defence Minister Yoav Gallant.",
            "url": "https://www.aljazeera.com/news/2023/10/11/israeli-pm-netanyahu-opposition-leader-gantz-to-form-emergency-unity-govt",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2020/05/672120baf5c2420ea33b0eccf31f3091_18.jpeg?resize=1200%2C675",
            "publishedAt": "2023-10-11T14:08:48Z",
            "content": "Israels Prime Minister Benjamin Netanyahu and centrist opposition leader Benny Gantz have agreed to form an emergency unity government.\r\nNetanyahu and Gantz, a former defence minister and military ch… [+1995 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Eyad Kourdi, Amir Tal, Abeer Salman, Celine Alkhaldi, Helen Regan",
            "title": "Israel steps up Gaza offensive as brutality of Hamas attacks laid bare - CNN",
            "description": "Israel has stepped up its offensive in Gaza following Hamas’ weekend assault as horrifying details emerge of the group’s surprise attacks on border communities that killed at least 1,200 people and injured thousands more.",
            "url": "https://www.cnn.com/2023/10/11/middleeast/israel-gaza-hamas-war-wednesday-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231011001654-01-gaza-seaport-strike-101023.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-10-11T14:06:00Z",
            "content": "Israel has stepped up its offensive in Gaza following Hamas weekend assault as horrifying details emerge of the groups surprise attacks on border communities that killed at least 1,200 people and inj… [+8608 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Borys Kit",
            "title": "‘Daredevil’ Hits Reset Button as Marvel Overhauls Its TV Business - Hollywood Reporter",
            "description": "Launched during the pandemic with a playbook to shoot $150 million-plus seasons with no pilots, the Disney unit is undergoing growing pains and seeing the logic of \"traditional TV culture.\"",
            "url": "https://www.hollywoodreporter.com/tv/tv-news/daredevil-marvel-disney-1235614518/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/29rep_opener-marvelTV-main.jpg?w=1024",
            "publishedAt": "2023-10-11T13:55:39Z",
            "content": "It didn’t take long to see the problem after Marvel Studios’ Daredevil: Born Again paused production in mid-June during the writers strike. Fewer than half of the series’ 18 episodes had been shot, b… [+7848 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Mike Reiss",
            "title": "Bill Belichick - Patriots QB Mac Jones to start against Raiders - ESPN - ESPN",
            "description": "Mac Jones will remain the Patriots' starting quarterback for Sunday's game against the Raiders, coach Bill Belichick confirmed Wednesday.",
            "url": "https://www.espn.com/nfl/story/_/id/38631799/bill-belichick-patriots-qb-mac-jones-start-raiders",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0928%2Fr1230992_1296x729_16%2D9.jpg",
            "publishedAt": "2023-10-11T13:51:00Z",
            "content": "FOXBOROUGH, Mass. -- Mac Jones remains the New England Patriots' starting quarterback.\r\n\"Yeah, we're not making any changes,\" coach Bill Belichick confirmed Wednesday morning.\r\nThe Patriots (1-4) vis… [+2910 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Lisa Respers France",
            "title": "Jada Pinkett Smith reveals she and Will Smith have been separated since 2016 - CNN",
            "description": "Jada Pinkett Smith has revealed that she and husband Will Smith have been living “completely separate lives” since 2016.",
            "url": "https://www.cnn.com/2023/10/11/entertainment/jada-pinkett-will-smith-split/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231011082502-will-smith-jada-pinkett-smith-2022-file.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-10-11T13:47:00Z",
            "content": "Jada Pinkett Smith has revealed that she and husband Will Smith have been living completely separate lives since 2016.\r\nIn a clip from her forthcoming NBC News primetime special with Hoda Kotb, Pinke… [+2118 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jeff Cox",
            "title": "Wholesale inflation rose 0.5% in September, more than expected - CNBC",
            "description": "The producer price index was expected to show a 0.3% increase in September, according to the Dow Jones consensus estimate.",
            "url": "https://www.cnbc.com/2023/10/11/ppi-september2023-.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106988738-1642022859475-GettyImages-1235313874b.jpg?v=1697027462&w=1920&h=1080",
            "publishedAt": "2023-10-11T12:31:02Z",
            "content": "A measure of wholesale prices rose more than expected in September, indicating simmering inflation pressures for the U.S. economy.\r\nThe producer price index, which measures costs for finished goods t… [+2726 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cyclingnews.com"
            },
            "author": "Tom Wieckowski",
            "title": "Amazon Prime Day tool deals I used as a full time bike mechanic - Cyclingnews",
            "description": "Some Amazon Prime Day Tool Deals chosen by an ex-mechanic",
            "url": "https://www.cyclingnews.com/news/amazon-prime-day-tool-deals-i-used-as-a-full-time-mechanic/",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/jo8fkgossU2vFofVk9ZQFW-1200-80.jpg",
            "publishedAt": "2023-10-11T12:17:31Z",
            "content": "It's the final day of the Amazon Prime Day Sales and we've been working hard to bring you worthwhile and good value deals on a range of cycling equipment. \r\nAs an ex-mechanic, I've spent plenty of ti… [+699 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Prisco's Week 6 NFL picks: Cowboys, Patriots bounce back from embarrassing defeats; 49ers, Eagles get tested - CBS Sports",
            "description": "Pete Prisco shares all of his Week 6 picks, including the Bucs establishing themselves as a true contender",
            "url": "https://www.cbssports.com/nfl/news/priscos-week-6-nfl-picks-cowboys-patriots-bounce-back-from-embarrassing-defeats-49ers-eagles-get-tested/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/10/11/c5b6038a-24af-4f5e-843f-f5f89a6a859d/thumbnail/1200x675/d5a8e129ea44f8b5290ab69379a16ab9/dakchargers.jpg",
            "publishedAt": "2023-10-11T12:12:32Z",
            "content": "Anytime you end up over .500 picking against the spread in an NFL week, it's a good week, right? \r\nI say it is since I went 7-6-1 last week ATS, which I will take, and then went 9-5 straight up. That… [+6644 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Ruby Mellen, Júlia Ledur, Laris Karklis, Cate Brown",
            "title": "What Israel's siege of Gaza would look like - The Washington Post - The Washington Post",
            "description": "The Gaza Strip, a 140-square-mile stretch of land with more than 2 million people, depends on Israel for most of its electricity and other basic services.",
            "url": "https://www.washingtonpost.com/world/2023/10/11/israel-siege-gaza-power/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/D5DW4U5D4VHRXJJAOIB363K7PI.jpg&w=1440",
            "publishedAt": "2023-10-11T12:00:00Z",
            "content": "Comment on this story\r\nComment\r\nDefense officials have ordered a complete siege of Gaza after militants broke through its border wall into southern Israel on Saturday and killed more than 1,000 peopl… [+8283 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "The Associated Press",
            "title": "Lidia makes landfall as Category 4 hurricane with 140 mph winds near Mexico’s Puerto Vallarta resort - CNBC",
            "description": "Hurricane Lidia made landfall as an \"extremely dangerous\" Category 4 storm Tuesday evening near Mexico's Pacific coast resort of Puerto Vallarta.",
            "url": "https://www.cnbc.com/2023/10/11/lidia-makes-landfall-as-category-4-hurricane-near-mexicos-puerto-vallarta-resort.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107315065-16970240282023-10-11t051600z_2084125613_rc24q3abaege_rtrmadp_0_storm-lidia.jpeg?v=1697024539&w=1920&h=1080",
            "publishedAt": "2023-10-11T11:42:19Z",
            "content": "Hurricane Lidia made landfall as an \"extremely dangerous\" Category 4 storm Tuesday evening with winds of 140 mph (220 kph) near Mexico's Pacific coast resort of Puerto Vallarta, and then moved inland… [+2030 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SFGate"
            },
            "author": "Silas Valentino",
            "title": "As annular solar eclipse nears, Calif. county braces for tourism boom - SFGATE",
            "description": "“We had 31 people book in the span of 24 hours,” said a hotel manager in far Northern California as the eclipse neared. “That’s not normal for us.”",
            "url": "https://www.sfgate.com/travel/article/2023-annular-solar-eclipse-modoc-county-18418079.php",
            "urlToImage": "https://s.hdnux.com/photos/01/34/63/23/24327401/3/rawImage.jpg",
            "publishedAt": "2023-10-11T11:03:46Z",
            "content": "FILE: Anthony Pulido watches a solar eclipse from the roof of a parking garage at Ohlone College on Monday, Aug. 21, 2017, in Fremont, Calif.\r\nMediaNews Group/Bay Area News vi/MediaNews Group via Get… [+4360 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Israeli shelling hits south Lebanon after Hezbollah rocket fire - Reuters",
            "description": "Israeli shelling hit southern Lebanese towns on Wednesday in response to a fresh rocket attack by powerful armed group Hezbollah, as cross-border violence extended into a fourth day.",
            "url": "https://www.reuters.com/world/middle-east/israel-reports-cross-border-fire-lebanon-where-residents-say-israeli-shelling-2023-10-11/",
            "urlToImage": "https://www.reuters.com/resizer/tbdp0WI9603Xw_ISHqriD98ka-4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GKRH3DWFEJKGFGN5IKZMHPUXDU.jpg",
            "publishedAt": "2023-10-11T10:06:00Z",
            "content": "JERUSALEM/BEIRUT, Oct 11 (Reuters) - Israeli shelling hit southern Lebanese towns on Wednesday in response to a fresh rocket attack by powerful armed group Hezbollah, as cross-border violence extende… [+1916 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Stellantis.com"
            },
            "author": null,
            "title": "Stellantis, Samsung SDI Announce Kokomo, Indiana as Site for Second U.S. StarPlus Energy Gigafactory - Stellantis",
            "description": "Joint venture will invest over $3.2 billon to co-locate new battery plant with gigafactory currently under construction\r\nCombined a",
            "url": "https://www.stellantis.com/en/news/press-releases/2023/october/stellantis-samsung-sdi-announce-kokomo-indiana-as-site-for-second-us-starplus-energy-gigafactory",
            "urlToImage": "https://www.stellantis.com/content/dam/stellantis-corporate/news/press-releases/share-icons/share-icons-v1.png",
            "publishedAt": "2023-10-11T10:03:15Z",
            "content": "AMSTERDAM Stellantis N.V. and Samsung SDI today announced that Kokomo, Indiana, will be the site for a second battery manufacturing facility in the United States as part of the StarPlus Energy joint … [+8617 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Mike Wall",
            "title": "NASA revealing OSIRIS-REx asteroid sample today: Watch it live - Space.com",
            "description": "The agency will give us our first look at the mission's pristine asteroid sample today (Oct. 10) at 11 a.m. ET.",
            "url": "https://www.space.com/nasa-osiris-rex-asteroid-sample-reveal-webcast",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/chvQXoYoEieH3FsRjDTbeG-1200-80.jpg",
            "publishedAt": "2023-10-11T10:00:41Z",
            "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Kim Hjelmgaard",
            "title": "Israel news: Among Hamas hostages is an American mom. Here's her story - USA TODAY",
            "description": "Some 100 people were kidnapped by Hamas this past weekend in Israel. Here is the story of one Minnesota family who was taken from their Kibbutz.",
            "url": "https://www.usatoday.com/story/news/world/2023/10/11/israel-hamas-war-americans-taken-from-kibbutz/71134248007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/10/11/USAT/71136421007-cindy-right-and-igal-flash-both-missing-since-satu.jpeg?crop=1491,839,x1,y134&width=1491&height=839&format=pjpg&auto=webp",
            "publishedAt": "2023-10-11T08:13:56Z",
            "content": "SHEFAYIM KIBBUTZ, Israel They exchanged text messages and emojis. Brief status updates with words of encouragement. A picture of the beloved family dog \"Tutsi.\"\r\nUntil no more messages came.\r\nAnd the… [+7538 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Elizabeth Elkind",
            "title": "House speaker race: Republicans to select a candidate to replace McCarthy in closed-door vote - Fox News",
            "description": "House Republicans are gathering at 10am to elect a new candidate for speaker behind closed doors.",
            "url": "https://www.foxnews.com/politics/house-speaker-race-republicans-select-candidate-speaker-closed-door-vote",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/Steve-Scalise-Jim-Jordan.jpg",
            "publishedAt": "2023-10-11T08:00:00Z",
            "content": "House Republicans are gathering behind closed doors on Wednesday morning to select their candidate for speaker after ex-Speaker Kevin McCarthys historic ouster last week. \r\nGOP lawmakers are expected… [+2136 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Xochitl Gomez’s Motown Night Foxtrot – Dancing with the Stars - Dancing With The Stars",
            "description": "Xochitl Gomez & Val dance the Foxtrot to “My Guy” by Mary Wells on Dancing With the Stars!Dancing with the Stars is LIVE, Tuesdays at 8/7c on ABC and Disney+...",
            "url": "https://www.youtube.com/watch?v=ftrgSoWCs3s",
            "urlToImage": "https://i.ytimg.com/vi/ftrgSoWCs3s/maxresdefault.jpg",
            "publishedAt": "2023-10-11T05:03:12Z",
            "content": null
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Dominik Dausch, Vanessa Arredondo",
            "title": "Deadly bird flu detected in US commercial poultry flocks in Utah, South Dakota - USA TODAY",
            "description": "The Department of Agriculture detected traces of the bird flu in commercial poultry flocks in South Dakota and Utah, raising outbreak concerns.",
            "url": "https://www.usatoday.com/story/news/nation/2023/10/11/bird-flu-commercial-poultry-flocks-utah-south-dakota-detection/71135684007/",
            "urlToImage": "https://www.usatoday.com/gcdn/-mm-/6fda8b19ffaf9272278ff768b67e8a620869bee8/c=0-50-768-482/local/-/media/SiouxFalls/2015/04/09/B9316922500Z.1_20150409152756_000_G62AF7EQ4.1-0.jpg?width=768&height=432&fit=crop&format=pjpg&auto=webp",
            "publishedAt": "2023-10-11T04:27:42Z",
            "content": "The U.S. Department of Agriculture detected traces of highly pathogenic bird flu in commercial poultry flocks in South Dakota and Utah on Friday, raising concerns about possible future outbreaks acro… [+5225 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jack Baer",
            "title": "UFC 294: Alexander Volkanovski replaces Charles Oliveira in title match vs. Islam Makhachev - Yahoo Sports",
            "description": "UFC 294 will have a different lightweight title bout than planned.",
            "url": "https://sports.yahoo.com/ufc-294-alexander-volkanovski-replaces-charles-oliveira-title-match-islam-makhachev-115451124.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Z8W02esM67v1biyt3EkKFg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04Mjg-/https://s.yimg.com/os/creatr-uploaded-images/2023-10/ae2439a0-67e7-11ee-b5fb-f17e17d97af2",
            "publishedAt": "2023-10-11T03:39:00Z",
            "content": "UFC 294 will feature a different lightweight title rematch than previously planned.\r\nOut is Charles Oliveira, the former champ who was set to face Islam Makhachev to reclaim the belt he lost nearly a… [+2243 chars]"
        }
    ]
    static defaultProps = {
        country : "in",
        pageSize : 6,
        category : 'general'
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }
    constructor(){
        super();
        console.log('constructor');
        this.state = {
            articles : this.articles,
            loading  : false,
            page: 1
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c85f4590845c466eadb4cbb4b8771e2f&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedDate = await data.json();
        this.setState({
            articles : parsedDate.articles,
            totalResults : parsedDate.totalResults,
            loading : false
        })
    }

    handleNextBtn = async () => {
        console.log('N');
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=c85f4590845c466eadb4cbb4b8771e2f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true});
            let data = await fetch(url);
            let parsedDate = await data.json();
            this.setState({
                page : this.state.page + 1,
                articles : parsedDate.articles,
                loading : false
            });
        }
    }
    handlePrevBtn = async () => {
        console.log('P');
        let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=c85f4590845c466eadb4cbb4b8771e2f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedDate = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles : parsedDate.articles,
        })
    }
    render() {
        return (
            <>
                <div className='container my-3'>
                    <h3 className='text-center'>News Nation - Top Headlines</h3>
                    {this.state.loading && <Spinner />}
                    <div className='row'>
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className='col-md-4 mt-3' key={element.url}>
                                        <NewsItem
                                            title={element.title?element.title.slice(0, 35):""} 
                                            description={element.description?element.description.slice(0, 60):""} 
                                            imageUrl={element.urlToImage} url={element.url}
                                            author={element.author}
                                            date={element.publishedAt}    
                                        />
                                    </div>
                        })}
                    </div>
                </div>
                    <div className='container d-flex justify-content-between'>
                        <button type='button' disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevBtn}>&larr; Previous</button>
                        <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextBtn}>Next &rarr;</button>
                    </div>
            </>
        )
    }
}

export default News
