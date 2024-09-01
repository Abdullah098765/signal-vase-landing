import React from 'react';

const Whitepaper = () => {
    const whitepaperUrl = '../../public/EtherealCash_Whitepaper.pdf';

    return <iframe
        src={"https://firebasestorage.googleapis.com/v0/b/signal-hub-eb98f.appspot.com/o/EtherealCash_Whitepaper.pdf.pdf?alt=media&token=144eb363-1ec9-4500-87d4-86fd7c652018"}
        width="100%"
        height="750px"
        style={{ border: 'none' }}
        title="Whitepaper"
    />
};

export default Whitepaper;
