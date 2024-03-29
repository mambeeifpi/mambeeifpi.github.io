import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faMobileAlt,
  faUsers,
  faHashtag,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(fab, faLaptopCode, faDrawPolygon, faEdit, faEdit, faBullhorn, faMapMarkerAlt, faPhone, faMobileAlt, faUsers, faHashtag, faPaperPlane);

const Icon = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
