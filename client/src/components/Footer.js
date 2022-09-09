import React from 'react'

function Footer() {
return (
    <div >
        <div className='slate-divider-container foot-slate '>
            <div className='slate-divider-container slate-div '>
                <hr class="slate-divider"/>
            </div>
            <div class="slate-column-container lazy entered slate-col-container-main mx-auto"  data-ll-status="entered">
                <div class="slate-column-wrapper" data-mobile-stack="vertical">
                    <div class="slate-column stack-vertical align-top slate-col-container">
                        <div class="slate-column_item slate-col">
                            <div class="slate-img-container slate-div-img d-flex">
                                <span className='slate-span'>
                                    <span className='img-span'>
                                        <img alt='tether logo' src="assets/tether1.png" className='img-img'/>
                                    </span>
                                </span>
                                <div className='d-none'></div>
                            </div>
                            <p class="slate-p">
                                <span>
                                </span>
                            </p>
                            <p class="slate-p">
                                <span className='px-1'>
                                    Copyright © 2022 Govest, Inc. All rights reserved.
                                </span>
                            </p>
                        </div>
                        <div class="slate-column_item slate-col">
                            <p class="slate-p">
                                <span className='fs-4'>Social</span>
                            </p>
                            <p class="slate-p">
                                <span></span>
                                <a href="https://www.instagram.com/trytether/" class="slate-a" rel="noreferrer">
                                    <span>Instagram </span>
                                </a>
                                <span></span>
                            </p>
                            <p class="slate-p">
                                <span></span>
                                <a href="https://www.tiktok.com/@trytether" class="slate-a" rel="noreferrer">
                                    <span>Tiktok</span>
                                </a>
                                <span></span>
                            </p>
                            <p class="slate-p" >
                                <span></span>
                            </p>
                            <p class="slate-p">
                                <span className='fs-4'>Contact Us</span>
                            </p>
                            <p class="slate-p">
                                <span></span>
                                <a href="mailto:team@typedream.com" class="slate-a" rel="noreferrer">
                                    <span>team@trytether.io</span>
                                </a>
                            </p>
                            <p class="slate-p">
                                <span>415-686-6230</span>
                            </p>
                        </div>
                        
                        <div class="slate-column_item slate-col">
                            <p class="slate-p">
                                <span className='fs-4'>Legal</span>
                            </p>
                            <p class="slate-p">
                                <span></span>
                                <a href="https://typedream.sfo3.digitaloceanspaces.com/Typedream_Terms_of_Service.pdf" class="slate-a" rel="noreferrer">
                                    <span>Terms of Service</span>
                                </a>
                                <span></span>
                            </p>
                            <span></span>
                            <p class="slate-p" >
                                <span>Privacy Policy</span>
                            </p>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Footer