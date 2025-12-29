export const checkApiAuth = async (req, res, next) => {
    try {
        if (!req.headers.cookie) {
            return res.status(401).json({
                success: false,
                message: `Cookie expires`
            })
        }

        if (req.headers.cookie) {
            const token = req.cookies.token;
            if (req.session && req.session.token && req.session.token === token) {
                next();
                return;
            }
        }

        return res.status(401).json({
            success: false,
            message: `Session expires`
        })
    } catch (error) {
        console.log("At checkApiAuth :", error)
    }
}