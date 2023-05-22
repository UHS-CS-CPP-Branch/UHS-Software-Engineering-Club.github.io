function open_table_of_contents_on_new_tab()
{
    const clean_url = location.protocol + '//' + location.host + location.pathname;
    window.open(clean_url);
}