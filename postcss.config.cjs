const { Variable } = require("lucide-react");

module.exports = {
    plugins: {
        'postcss-preset-mantine': {},
        'postcss-simple-vars': {
        Variable: {
            'mantine-breakpoint-xs':'36rem',
            'mantine-breakpoint-sm':'48rem',
            'mantine-breakpoint-md':'62rem',
            'mantine-breakpoint-lg':'75rem',
            'mantine-breakpoint-xl':'88rem',
        },
    },

    },
};