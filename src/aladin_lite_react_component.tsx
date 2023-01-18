import React from "react"

interface Props {
    width: number 
    height: number
}

export default function Aladin(props: Props) {

    const scriptloaded = () => {
        const win: any = window
        const params = { survey: 'P/DSS2/color', zoom: 2, showReticle: true }
        let aladin = win.A.aladin('#aladin-lite-div', params);
        const url = 'https://irsa.ipac.caltech.edu/cgi-bin/Gator/nph-query?catalog=allwise_p3as_psd&spatial=cone&radius=300&radunits=arcsec&objstr=00h+42m+44.32s+41d+16m+08.5s&size=300&outfmt=3&selcols=ra,dec,w1mpro,w2mpro,w3mpro,w4mpro'
        win.A.catalogFromURL(url)
    }

    React.useEffect(() => {
        const aladinStyle = document.createElement('link')
        aladinStyle.href = "https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.css"
        aladinStyle.rel = 'stylesheet'
        aladinStyle.type = 'text/css'
        document.head.appendChild(aladinStyle)
        const jqScript = document.createElement("script")
        jqScript.src = "https://code.jquery.com/jquery-1.12.1.min.js"
        jqScript.async = true
        document.body.appendChild(jqScript)
        console.log('generating aladin window')
        const script = document.createElement("script")
        script.src = "https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.js"
        script.async = true
        script.onload = scriptloaded
        document.body.appendChild(script)
    }, [])

    return (
        <div id='aladin-lite-div' style={{ width: `${props.width}px`, height: `${props.height}px` }} />
    )
}

Aladin.defaultProps = {
width: 500,
height: 500
}
