import React from 'react'
import Cards from './Cards'
import "../components/Articles.css"
import bread from "../img/f14.png"
const Articles = () => {
    return (
        <div>
            <h1 className='text-center'>Articles</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                          <Cards
                          Tag='Tech'
                          Images={bread}
                          text='The FAA will test drone detecting technologies in airports this year'
                          />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                          <Cards
                          Tag='Food'
                          Images={bread}
                          text='Rocket Lab will resume launches no sooner than August 27th'
                          />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                          <Cards
                          Tag='Tech'
                          Images={bread}
                          text='Google Drive flaw may attackers fool you into install malware'
                          />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                          <Cards
                          Tag='Food'
                          Images={bread}
                          text='TikTok will sue the US over threatened ban'
                          />
                    </div>
                
                    
                    
                </div>
                <div className="row">
                <div className="col-lg-3 col-sm-6">
                          <Cards
                          Tag='Tech'
                          Images={bread}
                          text='The FAA will test drone detecting technologies in airports this year'
                          />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                          <Cards
                          Tag='Food'
                          Images={bread}
                          text='Rocket Lab will resume launches no sooner than August 27th'
                          />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                          <Cards
                          Tag='Tech'
                          Images={bread}
                          text='Google Drive flaw may attackers fool you into install malware'
                          />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                          <Cards
                          Tag='Food'
                          Images={bread}
                          text='TikTok will sue the US over threatened ban'
                          />
                    </div>
                
                    
                    
                </div>
               
            </div>
            
        </div>
    )
}

export default Articles
