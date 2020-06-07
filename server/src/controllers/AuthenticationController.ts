export function register(req: any, res: any) {
    res.send({
        message: `Hello ${req.body.email}! your user was registered`
    })
}