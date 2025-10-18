import React from 'react';

import {Text, View} from 'react-native';
import {Tabs} from "expo-router";

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="Tabs"
                options={{
                    title: 'Home',
                    headerShown: false
                }}
            />
        </Tabs>
    );
};

export default _Layout;
