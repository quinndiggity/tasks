/**
 * Nextcloud - Tasks
 *
 * @author Raghu Nayyar
 * @author Georg Ehrke
 * @author Raimund Schlüßler
 * @copyright 2017 Raghu Nayyar <beingminimal@gmail.com>
 * @copyright 2017 Georg Ehrke <oc.list@georgehrke.com>
 * @copyright 2017 Raimund Schlüßler <raimund.schluessler@googlemail.com>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

angular.module('Tasks').service('DavClient', [
	function() {
		'use strict';
		var client;
		client = new dav.Client({
			baseUrl: OC.linkToRemote('dav/calendars'),
			xmlNamespaces: {
				'DAV:': 'd',
				'urn:ietf:params:xml:ns:caldav': 'c',
				'http://apple.com/ns/ical/': 'aapl',
				'http://owncloud.org/ns': 'oc',
				'http://nextcloud.com/ns': 'nc',
				'http://calendarserver.org/ns/': 'cs'
			}
		});
		angular.extend(client, {
			NS_DAV: 'DAV:',
			NS_IETF: 'urn:ietf:params:xml:ns:caldav',
			NS_APPLE: 'http://apple.com/ns/ical/',
			NS_OWNCLOUD: 'http://owncloud.org/ns',
			NS_NEXTCLOUD: 'http://nextcloud.com/ns',
			NS_CALENDARSERVER: 'http://calendarserver.org/ns/',
			buildUrl: function(path) {
				return window.location.protocol + '//' + window.location.host + path;
			},
			wasRequestSuccessful: function(status) {
				return status >= 200 && status <= 299;
			}
		});
		return client;
	}
]);
