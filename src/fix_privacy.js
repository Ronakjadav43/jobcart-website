const fs = require('fs');

const privacyData = [
    {
        "Id": 1,
        "Url": "privacy-policy",
        "Title": "Privacy Policy",
        "Descp": `<p>JobCart Inc. (herein referred to under its operating name "JobCart" and the "Service") is the sole owner of the information collected on this Service. We will not sell, share, or rent information to others in ways different from what is disclosed in this statement.<br /><br /></p>
<h3>Registration</h3>
<p>In order to use JobCart, a Member must first fill out our registration form. During registration a Member might be required to provide their contact information (name and email address). This information is used for verification and to contact the Member regarding services on JobCart for which they have expressed interest. By registering on JobCart, a Member consents to their data being used on any other existing or future services operated by JobCart.<br /><br /></p>
<h3>Cookies</h3>
<p>A cookie is a piece of data stored on the Member&rsquo;s device containing information about the Member. Usage of a cookie is in no way linked to any personally identifiable information while on our Service. For instance, by setting a cookie on JobCart, the Member would not have to enter in a password more than once, thereby saving time while on JobCart. If a Member rejects the cookie, they may still use JobCart. The only drawback to this is that the Member will be limited in some areas of our Service. Cookies can also enable us to track and target the interests of our Members to enhance the experience of our Service.<br /><br /></p>
<div>
<h4>Security</h4>
</div>
<p>JobCart takes every precaution to protect our Members information. If you have any questions about the security of the Service, please contact us.<br /><br /></p>
<h5>Safety and compliance with Law</h5>
<p>JobCart may disclose your information to courts, law enforcement or governmental authorities, or authorized third parties, if and to the extent we are required to do so by law or if such disclosure is reasonably necessary: (i) to comply with legal process and to respond to claims asserted against JobCart, (ii) to respond to verified requests relating to a criminal investigation or alleged or suspected illegal activity or any other activity that may expose us, you, or any other of our Members to legal liability, (iii) to enforce and administer our Terms of Service or other agreements with Members, (iv) for fraud investigation and prevention, risk assessment, customer support, product development and debugging purposes, or (v) to protect the rights, property or personal safety of JobCart, its employees, its Members, or members of the public.<br /><br />We will attempt to notify Members about these requests unless: (i) providing notice is prohibited by the legal process itself, by court order we receive, or by applicable law, or (ii) we believe that providing notice would be futile, ineffective, create a risk of injury or bodily harm to an individual or group, or create or increase a risk of fraud upon JobCart's property, its Members and the Service (collectively, "Risk Scenarios"). In instances where we comply with legal requests without notice for these reasons, we will attempt to notify that Member about the request after the fact if we determine in good faith that we are no longer legally prohibited from doing so and that no Risk Scenarios apply.<br /><br /></p>
<h5>Log files</h5>
<p>We use IP addresses to analyze trends, administer the Service, track Members' locations and gather broad demographic information in order to constantly improve the Service.<br /><br /></p>
<h5>Service updates</h5>
<p>We will send Service announcement updates by email. Members are not able to unsubscribe from Service announcements, which contain important information about this Service. We communicate with the Member to provide requested services and in regards to issues relating to their account via email.<br /><br /></p>
<h5>Opt-out</h5>
<p>Members who no longer wish to receive our marketing emails may opt-out of receiving these communications by selecting the unsubscribe link within the email.<br /><br /></p>
<h5>Account cancellation</h5>
<p>At any point in time Members can cancel their Account by either visiting Account Settings &gt; Close account or contacting us. In this process, their Account will be flagged inactive and deleted within a discretionary time period. Within that period, Members may reactivate their Account if they wish.<br /><br /></p>
<h5>Data deletion</h5>
<p>At any point in time Members can request for their data to be deleted by contacting JobCart.<br /><br /></p>
<h5>Identity Verification</h5>
<p>We will be using a third-party service provider called&nbsp;<a href="https://withpersona.com/" target="_blank">Persona</a>&nbsp;to collect your Biometric Data and to verify your identity. Our service provider does not use your Biometric Data for any purpose other than to verify your identity, and does not share your Biometric Data with us or with any other third party. We can view a copy of the photographs of your ID and your face to help process your Identity Verification, but we do not have access to your Biometric Data. Our service provider, Persona, retains your biometric information for six months following identity verification for security, safety and compliance purposes. After six months, Persona permanently deletes your Biometric Data and the photographs of your identification documents.<br /><br /></p>
<h5>Notification of changes</h5>
<p>If we make changes to our Privacy policy, we will email a link to this page to all our Members so they are always aware of what information we collect, how we use it and under what circumstances, if any, we disclose it. We will use information in accordance with the Privacy policy under which the information was collected.</p>`,
        "imgCaption": "",
        "Img": "_8631_22_29_58.jpg",
        "ImgFullPath": "https://jcassets.jobcart.ca/blog/blog_8631_22_29_58.jpg",
        "createdDt": "2024-09-07",
        "Status": "active",
        "Seq": 0,
        "pageTitle": "Privacy Policy",
        "pageKeywords": "Privacy Policy",
        "pageDescp": "Privacy Policy"
    }
];

let data = fs.readFileSync('src/data.json', 'utf8');

// replace the invalid privacy block with valid stringified data.
// the invalid block looks like "privacy": [\n...\n]\n}
const matchIndex = data.lastIndexOf('"privacy":');
if (matchIndex > -1) {
    const validPart = data.substring(0, matchIndex);
    const newContent = validPart + '"privacy": ' + JSON.stringify(privacyData, null, 4) + '\n}\n';
    fs.writeFileSync('src/data.json', newContent);
    console.log('Fixed data.json');
} else {
    console.log('Could not find privacy block.');
}
