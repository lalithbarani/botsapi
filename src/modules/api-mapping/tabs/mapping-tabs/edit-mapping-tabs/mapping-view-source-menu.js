import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import { Fragment, useState } from 'react';
import { ReactComponent as Minusicon } from '../../../../../assets/svg/minus.svg';
import { ReactComponent as SixDotIcon } from '../../../../../assets/svg/DotsSixVertical.svg';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
   
    getItem('soap:Envelope', 'soap-envelope', '', [
        getItem('soap:Body', 'soap-body', '', [

            getItem('ns1RateEstimateResponseVO', 'ns1RateEstimateResponseVO', '', [
                getItem('account', 'account', <SixDotIcon />),
                getItem('MyPlID', 'myplid', <SixDotIcon />),
                getItem('InboundOutbound', 'inboundOutbound', <SixDotIcon />),
                getItem('eZip', 'eZip', <SixDotIcon />),
                getItem('eZip', 'eZip1', <SixDotIcon />),
                getItem('Weights', 'weights', <SixDotIcon />),
                getItem('Ctrype', 'ctrype', <SixDotIcon />),
                getItem('Count', 'count', <SixDotIcon />),
                getItem('Method', 'method', <SixDotIcon />),
            ])
        ]),
    ]),

];

let MappingViewSourceMenu = () => {
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
    const changeMode = (value) => {
        setMode(value ? 'vertical' : 'inline');
    };
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    return (
        <Fragment>

            <Menu

                defaultSelectedKeys={['1']}
                defaultOpenKeys={['soap-envelope', 'soap-body', 'ns1RateEstimateResponseVO']}
                mode='inline'
                theme={theme}
                items={items}
                style={{ width: "100%", border: "none" }}
                className="b-0"
                expandIcon={({ isActive }) => !isActive ? <Minusicon /> : <PlusOutlined fill='#05987B' />}
            />
        </Fragment>
    )
}
export default MappingViewSourceMenu;