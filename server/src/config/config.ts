const config = {
    port: process.env.PORT || 8082,
    db: {
        database: process.env.DB_NAME || 'tftanalyser',
        user: process.env.DB_USER || 'tftanalyser',
        password: process.env.DB_PASS || 'tftanalyser'
    }
}
export default config;