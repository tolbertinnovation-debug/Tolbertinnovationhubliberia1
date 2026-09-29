"""Rasterize the code-authored store SVG with system librsvg/Cairo (Linux CI)."""
import ctypes as C
import ctypes.util
import pathlib

folder = pathlib.Path(__file__).resolve().parents[1] / 'release/output'
def library(name):
    found = ctypes.util.find_library(name)
    if not found:
        raise RuntimeError(f'Install system library {name} to render the store artwork')
    return C.CDLL(found)
rsvg, cairo, gobject = library('rsvg-2'), library('cairo'), library('gobject-2.0')
def function(lib, name, args, result):
    fn = getattr(lib, name); fn.argtypes = args; fn.restype = result; return fn
new = function(rsvg, 'rsvg_handle_new_from_file', [C.c_char_p, C.POINTER(C.c_void_p)], C.c_void_p)
surface_create = function(cairo, 'cairo_image_surface_create', [C.c_int, C.c_int, C.c_int], C.c_void_p)
create = function(cairo, 'cairo_create', [C.c_void_p], C.c_void_p)
render = function(rsvg, 'rsvg_handle_render_cairo', [C.c_void_p, C.c_void_p], C.c_int)
write = function(cairo, 'cairo_surface_write_to_png', [C.c_void_p, C.c_char_p], C.c_int)
destroy = function(cairo, 'cairo_destroy', [C.c_void_p], None)
surface_destroy = function(cairo, 'cairo_surface_destroy', [C.c_void_p], None)
unref = function(gobject, 'g_object_unref', [C.c_void_p], None)
error = C.c_void_p()
handle = new(str(folder / 'feature-graphic.svg').encode(), C.byref(error))
assert handle, 'Could not load the feature graphic SVG'
surface = surface_create(0, 1024, 500)
context = create(surface)
try:
    assert render(handle, context), 'SVG render failed'
    output = folder / 'feature-graphic-1024x500.png'
    assert write(surface, str(output).encode()) == 0, 'PNG export failed'
    print(output)
finally:
    destroy(context); surface_destroy(surface); unref(handle)
