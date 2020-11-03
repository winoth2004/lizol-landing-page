import React from "react"

const InlineScript = () => {
    return (<script type="text/javascript">
        {`(function initScrollListener() {
            console.log('init');
            let logoElm;
            if (document) {
                console.log('onscroll init');
                document.body.onscroll = function() {
                    if(!logoElm) {
                        logoElm = document.querySelector(".brand_logo");
                    }
                    const scrollTop = document.documentElement.scrollTop;
                    console.log(scrollTop);
                    if (scrollTop < 70) {
                        logoElm.style.backgroundSize = "85%";
                    } else {
                        logoElm.style.backgroundSize = "65%";
                    }
                };
            }
        })();`}
        </script>);
}

export default InlineScript