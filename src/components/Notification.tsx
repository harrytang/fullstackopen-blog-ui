/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from "react";

interface NotificationProps {
  notification: { message: string; type: string };
}

const Notification: React.FC<NotificationProps> = ({
  notification
}: {
  notification: { message: string; type: string };
}) => {
  if (notification.message === "") {
    return null;
  }

  return <div className={notification.type}>{notification.message}</div>;
};

export default Notification;
