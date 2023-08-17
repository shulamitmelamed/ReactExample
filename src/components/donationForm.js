import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import swal from 'sweetalert';
import '../css/donationForm.css';
import { useSelector } from 'react-redux';
import { InputMask } from 'primereact/inputmask';

function DonationForm() {

    const sum = useSelector(state => state.user.currentUser.sum)
    
    return (
        <>

            <div id="donationForm">
                <Card title="Donation Form" subTitle="enter your donation details">
                    <div className="card">

                        <h3>Your Personal details:</h3>
                        <div className="grid p-fluid">
                            <div className="col-12 md:col-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText placeholder="Donator name" />
                                </div>
                            </div>

                            <div className="col-12 md:col-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-phone"></i>
                                    </span>
                                    <InputMask placeholder="Phone" mask='999-999-9999'/>
                                </div>
                            </div>

                            <div className="col-12 md:col-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-whatsapp"></i>
                                    </span>
                                    <InputText placeholder="Email" />
                                </div>
                            </div>

                            <div className="col-12 md:col-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">id</span>
                                    <InputMask placeholder="Identity number" mask='999999999' />
                                </div>
                            </div>
                        </div>

                        <h3>Your Sum To donate:</h3>
                        <div className="grid">
                            <div className="col-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-star-fill"></i>
                                    </span>
                                    <InputNumber placeholder="Sum to donate" value={sum} disabled/>
                                    <span className="p-inputgroup-addon">$</span>
                                </div>
                            </div>
                        </div>

                        <h3>Credit card details</h3>
                        <div className="grid">
                            <div className="col-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-star-fill"></i>
                                    </span>
                                    <InputMask placeholder="Card number" mask='9999-9999-9999-9999'/>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-star-fill"></i>
                                    </span>
                                    <InputText placeholder="Name of the owner" />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-star-fill"></i>
                                    </span>
                                    <InputMask placeholder="3 digits" mask='999'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <Button severity="secondary" outlined onClick={()=>swal("Thank you for your donation!")}>Send</Button>
                   
                </Card>
            </div>
        </>
    )
}
export default DonationForm