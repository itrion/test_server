import os
import cherrypy


class Root(object):

	def authService(self):
		return "success"

	authService.exposed = True

config = {'/': {'tools.staticdir.on': True,
                'tools.staticdir.dir': os.path.dirname(os.path.realpath(__file__)) + '/html',
                'tools.staticdir.index': 'index.html'}}

cherrypy.quickstart(Root(), config=config)