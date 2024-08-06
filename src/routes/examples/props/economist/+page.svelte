<script>
    import Select from '$lib/Select.svelte';

    let interval = null;
    let items = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ];
</script>


<Select {items}
    placeholder="Decade or century"
    value={interval}
    showChevron={interval !== null}
    clearable={true}
    showIndicator={true}
    indicatorSvg={'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>'}
    --padding="0px 0px 0px 12px"
/>
