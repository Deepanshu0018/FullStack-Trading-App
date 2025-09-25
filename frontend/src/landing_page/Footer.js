import React from "react";

function Footer() {
  return (
    <footer className="bg-light mt-5 pt-5">
      <div className="container border-top pt-4 position-relative">
        <div className="row mt-4">
          {/* Logo Column */}
          <div className="col-md-3 mb-4 text-center text-md-start">
            <img
              src="media/images/logo.svg"
              className="mb-3"
              style={{ width: "60%" }}
              alt="Logo"
            />
            <p className="small text-muted">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Column */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              About
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Products
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Pricing
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Referral programme
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Careers
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Zerodha.tech
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Press & media
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Zerodha cares (CSR)
            </a>
          </div>

          {/* Support Column */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Support</h6>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Contact
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Support portal
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Z-Connect blog
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              List of charges
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Downloads & resources
            </a>
          </div>

          {/* Account Column */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Account</h6>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Open an account
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              Fund transfer
            </a>
            <a className="d-block text-decoration-none text-dark mb-1" href="">
              60 day challenge
            </a>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="mt-4 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment.On the issue of allotment, the money will be
            automatically debited from your account. Please ensure that
            sufficient balance is maintained in the bank account. Please note
            that the details filled in the application form should match with
            the details in the demat account, else the application is liable to
            be rejected. Please refer to the Redressal of Investor Grievances
            Policy on our website before filing any complaint.
          </p>
        </div>

        {/* Subtle credit */}
        <span
          style={{
            fontSize: "12px",
            position: "absolute",
            bottom: "5px",
            right: "10px",
            color: "#555",
            opacity: 0.8,
          }}
        >
          Made with ❤️ by Deepanshu Gupta
        </span>
      </div>
    </footer>
  );
}

export default Footer;
