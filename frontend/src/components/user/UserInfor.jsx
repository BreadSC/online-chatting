import PropTypes from 'prop-types';
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";

import { Box, Typography, Button, Divider } from "@mui/material";

function UserInfor(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth>
            {/* Header */}
            <Box sx={{ position: 'relative' }}>
                <img
                    src="https://via.placeholder.com/400x200" // Replace with dynamic URL
                    alt="Cover"
                    style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <Avatar
                    src="https://via.placeholder.com/100" // Replace with dynamic URL
                    alt="Avatar"
                    sx={{
                        width: 80,
                        height: 80,
                        position: 'absolute',
                        bottom: -40,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        border: '3px solid white',
                    }}
                />
            </Box>

            <Box sx={{ textAlign: 'center', mt: 6, px: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                    Photocopy Dh Hutech Khu E
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cẩn trọng khi kết bạn với người lạ
                </Typography>

                

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                    <Button variant="outlined" color="primary" fullWidth>
                        Hủy kết bạn
                    </Button>
                    <Button variant="contained" color="primary" fullWidth>
                        Nhắn tin
                    </Button>
                </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ px: 2, pb: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Thông tin cá nhân
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Tên:</strong> Photocopy Dh Hutech Khu E
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Tham gia Zalo:</strong> 29/12/2022
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Button fullWidth variant="text" color="error">
                    Chặn tin nhắn
                </Button>
                <Button fullWidth variant="text" color="error">
                    Báo xấu
                </Button>
            </Box>
        </Dialog>
    );
}

UserInfor.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default UserInfor;
