pix g_c[30][20];

function pix foo(pix[][] canvas)
{
    canvas[3][4] = 56;
    return canvas[3][4];
}

function pix bar() {
    return foo(g_c);
}

print(bar());
