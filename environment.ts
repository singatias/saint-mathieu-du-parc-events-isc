interface IEnvironment {
    year?: number,
    driver_path: string;
    // schedule: string;
}

export const environment: IEnvironment = {
    year: 2026,
    driver_path: './chromedriver/mac_arm-143.0.7499.169/chromedriver-mac-arm64/chromedriver',
    // https://www.npmjs.com/package/node-cron
    // schedule: '* * * * *'
};
